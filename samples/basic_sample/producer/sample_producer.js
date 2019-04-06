/***
 Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Amazon Software License (the "License").
 You may not use this file except in compliance with the License.
 A copy of the License is located at

 http://aws.amazon.com/asl/

 or in the "license" file accompanying this file. This file is distributed
 on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied. See the License for the specific language governing
 permissions and limitations under the License.
 ***/


var util = require('util');
var logger = require('../../util/logger');
var globalCount;

function sampleProducer(kinesis, config) {
    let log = logger().getLogger('sampleProducer');

    function _createStreamIfNotCreated(callback) {
        var params = {
            ShardCount: config.shards,
            StreamName: config.stream
        };

        kinesis.createStream(params, function (err, data) {
            if (err) {
                if (err.code !== 'ResourceInUseException') {
                    callback(err);
                    return;
                } else {
                    log.info(util.format('%s stream is already created. Re-using it.', config.stream));
                }
            } else {
                log.info(util.format("%s stream doesn't exist. Created a new stream with that name ..", config.stream));
            }

            // Poll to make sure stream is in ACTIVE state before start pushing data.
            _waitForStreamToBecomeActive(callback);
        });
    }

    function _waitForStreamToBecomeActive(callback) {
        kinesis.describeStream({StreamName: config.stream}, function (err, data) {
            if (!err) {
                log.info(util.format('Current status of the stream is %s.', data.StreamDescription.StreamStatus));
                if (data.StreamDescription.StreamStatus === 'ACTIVE') {
                    callback(null);
                } else {
                    setTimeout(function () {
                        _waitForStreamToBecomeActive(callback);
                    }, 1000 * config.waitBetweenDescribeCallsInSeconds);
                }
            }
        });
    }

    function _writeToKinesis() {

    }

    return {
        run: function () {
            // _createStreamIfNotCreated(function(err) {
            //   if (err) {
            //     log.error(util.format('Error creating stream: %s', err));
            //     return;
            //   }

            console.log("AWS_ACCESS_KEY_ID: "+process.env.AWS_ACCESS_KEY_ID);
            console.log("AWS_SECRET_ACCESS_KEY: "+process.env.AWS_SECRET_ACCESS_KEY);


            console.log("Mandando mensaje!");
            var count = 100;
            var limit = 120;
            while (count < limit) {
                globalCount = count;

                var id = 'id-' + Math.floor(Math.random() * 10000000);
                var record = JSON.stringify({
                    id: count,
                    // nombre : "nodejs",
                    nombre: "from local nodejs",
                    empresa: "test - 1"
                });

                var recordParams = {
                    Data: record,
                    PartitionKey: id,
                    StreamName: config.stream
                };


                console.log("Send to ["+config.stream+"] -> " + record.toString());
                kinesis.putRecord(recordParams, (err, data) => {
                    if (err) {
                        log.info('------------------------------------------------');
                        console.log(err);
                        log.error(err);
                        log.info('------------------------------------------------');

                    } else {
                        log.info('Successfully sent data to Kinesis.');
                    }
                });

                count++;


            }
            // });
        }
    };
}

module.exports = sampleProducer;
