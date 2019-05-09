const parametros = require('./parametrosAdopta');
let globalCount;
const porcentUndefined = 70;

module.exports = () => {
    const p = parametros;
    sleep(200);
    const especie = randomBreed();
    return {
        // protectora: params.id_protectora,
        timestamp: Date.now(),
        especie: especie,
        raza: randomVal(p["razas_" + especie]),
        estado: randomVal(p.estados_animal) || 'En adopción',
        sexo: randomVal(p.sexos, true),
        tamano: randomVal(p.tamanos_animal, true),
        edad: randomVal(p.edades_animal, true),
        color: randomVal(p.colores_animal, true),
        caracter: randomVal(p.caracter_animal, true),
        chip: randomVal([true, false], true),
        ppp: randomVal([true, false], true),
        // -- vacunas: randomVal([true, false], true),
        location: randomLocationSpain(),
        maxDistance: randomInt(30000, 5000),
        // -- limit: Number(req.query.num),
        pag: randomVal([1, 2, 3, 4], true) || 1,
        nameSystem: process.env.nameSystem
    };
};


function randomVal(array, muchoUndefined) {
    let numValues;

    if (muchoUndefined) {
        const random = randomInt(100);
        if (random < porcentUndefined)
            return undefined;
    }

    numValues = randomInt(array.length + 1);

    if (numValues - 1 === -1)
        return undefined;
    else
        return array[randomInt(numValues - 1)];

}

function randomBreed() {
    const especies = parametros.especie_animal; //'Gato', 'Perro'
    let numValues;
    const porcentPerros = 70;
    const probPerros = randomInt(100);

    if (probPerros < porcentPerros)
        return 'Perro';
    else
        return 'Gato';
}

function produceRandomArray(array, max) {

    const numValues = randomInt(max);

    if (numValues === 0) {
        return undefined;

    } else {
        const result = [];

        for (let i = 0; i < numValues; i++) {
            result.push(
                array[randomInt(array.length)]
            );
        }
        return result;
    }
}

function randomLocationSpain() {

    const centerPointEspaña = {'name': 'CENTRO España', lat: 40.017608, lon: -4.472229};
    const distanceLimitEspaña = 200000; //in meter

    const centerPointMadrid = {'name': 'CENTRO Madrid', lat: 40.4378698, lon: -3.819619};
    const distanceLimitMadrid = 35000; //in meter

    const centerPointBarcelona = {'name': 'CENTRO Barcelona', lat: 41.497908, lon: 2.006014};
    const distanceLimitBarcelona = 10000; //in meter

    return randomGeo(centerPointMadrid, distanceLimitMadrid)

}

function randomInt(max, min = 0) {
    return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

// module.exports = sampleProducer;


// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

function randomGeo(center, radius) {
    var metersInOneDegree = 65000
    // var numberRandomPoints = 400;

    var y0 = center.lat;
    var x0 = center.lon;
    var rd = radius / metersInOneDegree; //about 111300 meters in one degree

    var u = Math.random();
    var v = Math.random();

    var w = rd * Math.sqrt(u);
    var t = 2 * Math.PI * v;
    var x = w * Math.cos(t);
    var y = w * Math.sin(t);

    //Adjust the x-coordinate for the shrinking of the east-west distances
    var xp = x / Math.cos(y0);

    var newlat = y + y0;
    var newlon = x + x0;
    var newlon2 = xp + x0;

    return {
        lat: newlat, //newlat.toFixed(5),
        // 'longitude': newlon.toFixed(5),
        lon: newlon2, //newlon2.toFixed(5),
        // 'distance': distance(center.latitude, center.longitude, newlat, newlon).toFixed(2),
        // 'distance': distance(center.lat, center.lon, newlat, newlon2).toFixed(2),
    };
}

//Calc the distance between 2 coordinates as the crow flies
function distance(lat1, lon1, lat2, lon2) {
    var R = 6371000;
    var a = 0.5 - Math.cos((lat2 - lat1) * Math.PI / 180) / 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * (1 - Math.cos((lon2 - lon1) * Math.PI / 180)) / 2;
    return R * 2 * Math.asin(Math.sqrt(a));
}


function sleep(milliseconds) {
    var start = Date.now();
    while (true) {
        let end = Date.now() - start;
        if (end > milliseconds) {
            // console.log("fin espera");
            break;
        }
    }
}