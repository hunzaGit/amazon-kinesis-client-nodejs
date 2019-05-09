'use strict';

module.exports = {


        arrayParametrosConfiguracion: ['parametros_find', 'estados_protectora', 'estados_animal', 'sexos', 'tamanos_animal', 'edades_animal',
            'especie_animal', 'razas_Gato', 'razas_Perro', 'provincias', 'municipios_madrid', 'comunidades', 'colores_animal', 'caracter_animal',
            'caracter_animal', 'asuntos_email'],

        arrayAtributosAnimal: ['nombre', 'especie', 'raza', 'mestizo', 'sexo', 'tamano', 'edad', 'ppp', 'color', 'caracter', 'chip', 'descripcion',
            'esterilizado', 'enfermedades', 'vacunas', 'lugar', 'fecha_entrada_protectora', 'fecha_registro', 'fecha_Adopcion',
            'estado', 'img_principal', 'galeria_imagenes', 'galeria_videos', 'visitas_recibidas', 'protectora'],

        parametros_find: ['basica', 'parcial', 'pesada', 'completa'],

        formatos_imagen: ['image/gif', 'image/jpeg', 'image/png'],
        formatos_video: ['video/mp4'],


        estados_protectora: ['ACTIVA', 'BANEADA', 'BAJA'],
        estados_animal: ['En adopción', 'Urgente', 'Adoptado', 'Acogido', 'Sacrificado', 'En cuarentena'],
        sexos: ['M', 'H'],
        tamanos_animal: ['MP', 'P', 'M', 'G', 'MG'],
        edades_animal: ['C', 'J', 'A', 'M', 'AB'],
        especie_animal: ['Gato', 'Perro'],
        colores_animal: ['Blanco', 'Negro', 'Marrón', 'Marrón claro', 'Gris', 'Beige', 'Atigrado', 'Azul', 'Leonado'],
        caracter_animal: ['Alegre', 'Juguetón', 'Atento', 'Fuerte', 'Agresivo', 'Tímido', 'Tranquilo', 'Noble', 'Tranquilo', 'Sociable', 'Mimoso', 'Dinámico',
            'Enérgico', 'Cariñoso'],

        razas_Gato: [
            "Abisinio", "Ashera", "Australian Mist", "Balinés", "Bengalí", "British shorthair - Gato británico de pelo corto",
            "Europeo", "Gato azul ruso", "Gato bombay", "Habana", "Himalayo", "Lykoi o gato lobo", "Mau egipcio", "Persa",
            "Ragdoll", "Shpynx o esfinge", "Siamés"
        ],

        razas_Perro: [
            "Airedale terrier", "Akita Americano", "Akita inu", "Alaskan malamute", "American Bully",
            "Appenzeller o perro boyero de Appenzell", "Basenji", "Basset artesiano normando o basset artesiano de Normandía",
            "Basset hound", "Beagle", "Beauceron o pastor de Beauce", "Bichón Maltés", "Bichón boloñés", "Bichón frisé",
            "Bichón habanero", "Bobtail o viejo pastor inglés", "Boerboel", "Border collie", "Border terrier", "Boston terrier",
            "Boyero de Berna", "Boyero de Flandes", "Braco alemán de pelo corto", "Braco húngaro o vizsla", "Broholmer",
            "Bull Terrier Inglés Miniatura", "Bull terrier inglés", "Bulldog americano", "Bulldog francés", "Bulldog inglés",
            "Bullmastiff", "Bóxer", "Ca de bou o dogo mallorquín", "Cairn terrier", "Cane corso o mastín italiano",
            "Caniche o poodle mediano", "Chesapeake bay retriever o retriever de la bahía de Chesapeake", "Chihuahua",
            "Cocker spaniel inglés", "Collie barbudo o bearded collie", "Collie de pelo corto", "Collie de pelo largo",
            "Coton de Tuléar", "Dachshund o teckel estándar", "Doberman pinscher", "Dogo argentino", "Dogo de Burdeos",
            "Dálmata", "El perro pekinés", "El perro terranova", "Fila brasileño", "Fox paulistinha o terrier brasileño",
            "Fox terrier de pelo alambre", "Fox terrier de pelo liso", "Galgo Afgano", "Galgo español",
            "Golden retriever o cobrador dorado", "Gos d\'atura català o pastor catalán", "Gran danés",
            "Gran sabueso anglo-francés tricolor", "Greyhound o galgo inglés", "Grifón belga", "Grifón de Bruselas",
            "Husky siberiano", "Jack russell terrier", "Kangal", "Keeshond", "Labrador Retriever", "Lebrel escocés o deerhound",
            "Lhasa apso", "Mastín napolitano o mastino napoletano", "Mastín tibetano o dogo del Tíbet", "Norfolk terrier",
            "Nova Scotia duck tolling retriever", "Papillón", "Pastor alemán", "Pastor belga groenendael", "Pastor belga laekenois",
            "Pastor belga malinois", "Pastor belga tervueren", "Pastor bergamasco", "Pastor ganadero australiano o boyero australiano",
            "Pastor ovejero australiano", "Pequeño perro león", "Perro crestado chino", "Perro crestado rodesiano",
            "Perro de agua español", "Perro de montaña de los Pirineos", "Perro lobo checoslovaco", "Perro lobo de Saarloos",
            "Perro pastor blanco suizo", "Perro pastor croata", "Perro pastor de Shetland", "Perro pastor de los Pirineos de cara rasa",
            "Perro pastor de los Pirineos de pelo largo", "Perro pastor polaco de las llanuras", "Petit brabançon",
            "Pinscher austriaco", "Pinscher miniatura", "Pit bull terrier americano", "Podenco ibicenco", "Pointer inglés",
            "Pomerania", "Presa canario o dogo canario", "Pug o carlino", "Ratón de praga", "Rottweiler", "Saluki",
            "San Bernardo", "Schipperke", "Schnauzer estándar", "Schnauzer gigante", "Schnauzer miniatura", "Scottish terrier",
            "Setter irlandés rojo", "Shar pei", "Shiba Inu", "Shih tzu", "Skye terrier", "Soft coated wheaten terrier irlandés",
            "Spitz alemán", "Staffordshire bull terrier", "Staffordshire terrier americano", "Terrier australiano",
            "Terrier negro ruso", "Tosa Inu", "Weimaraner o braco de Weimar", "Welsh corgi Cardigan", "Welsh corgi Pembroke",
            "West highland white terrier", "Whippet", "Yorkshire terrier"
        ],

        provincias: ['Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Avila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres',
            'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
            'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra',
            'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
            'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'],

        municipios_madrid: ["Ajalvir", "Alameda del Valle", "Alcalá de Henares", "Alcobendas", "Alcorcón", "Aldea del Fresno",
            "Algete", "Alpedrete", "Ambite", "Anchuelo", "Aranjuez", "Arganda del Rey", "Arroyomolinos", "Batres", "Becerril de la Sierra",
            "Belmonte de Tajo", "Berzosa del Lozoya", "Boadilla del Monte", "Braojos", "Brea de Tajo", "Brunete", "Buitrago de Lozoya",
            "Buitrago del Lozoya", "Bustarviejo", "Cabanillas de la Sierra", "Cadalso de los Vidrios", "Camarma de Esteruelas", "Campo Real",
            "Canencia", "Carabaña", "Casarrubuelos", "Cenicientos", "Cerceda", "Cercedilla", "Cervera de Buitrago", "Chapinería", "Chinchón",
            "Ciempozuelos", "Cobeña", "Collado Mediano", "Collado Villalba", "Colmenar Viejo", "Colmenar de Oreja", "Colmenar del Arroyo",
            "Colmenarejo", "Corpa", "Coslada", "Cubas de la Sagra", "Daganzo de Arriba", "El Atazar", "El Berrueco", "El Boalo", "El Escorial",
            "El Vellón", "El Álamo (Madrid)", "Estremera", "Fresnedillas de la Oliva", "Fresno de Torote", "Fuenlabrada", "Fuente el Saz de Jarama",
            "Fuentidueña de Tajo", "Galapagar", "Garganta de los Montes", "Gargantilla del Lozoya y Pinilla de Buitrago", "Gascones", "Getafe",
            "Griñón", "Guadalix de la Sierra", "Guadarrama", "Horcajo de la Sierra-Aoslos", "Horcajuelo de la Sierra", "Hoyo de Manzanares",
            "Humanes de Madrid", "La Acebeda", "La Cabrera", "La Hiruela", "La Serna del Monte", "Las Rozas", "Leganés", "Loeches", "Los Molinos",
            "Los Santos de la Humosa", "Lozoya", "Lozoyuela-Navas-Sieteiglesias", "Madarcos", "Madrid (desambiguación)", "Majadahonda",
            "Manzanares el Real", "Mataelpino", "Meco", "Mejorada del Campo", "Miraflores de la Sierra", "Montejo de la Sierra", "Moraleja de Enmedio",
            "Moralzarzal", "Morata de Tajuña", "Móstoles", "Navacerrada", "Navalafuente", "Navalagamella", "Navalcarnero", "Navarredonda y San Mamés",
            "Navas del Rey", "Nuevo Baztán", "Olmeda de las Fuentes", "Orusco de Tajuña", "Paracuellos del Jarama", "Parla", "Patones", "Pedrezuela",
            "Pelayos de la Presa", "Perales de Tajuña", "Pezuela de las Torres", "Pinilla del Valle", "Pinto", "Piñuécar-Gandullas", "Pozuelo de Alarcón",
            "Pozuelo del Rey", "Prádena del Rincón", "Puebla de la Sierra", "Puentes Viejas", "Quijorna", "Rascafría", "Redueña", "Ribatejada", "Rivas-Vaciamadrid",
            "Robledillo de la Jara", "Robledo de Chavela", "Robregordo", "Rozas de Puerto Real", "San Agustín del Guadalix", "San Fernando de Henares",
            "San Lorenzo del Escorial", "San Martín de Valdeiglesias", "San Martín de la Vega", "San Sebastián de los Reyes", "Santa María de la Alameda",
            "Santorcaz", "Serranillos del Valle", "Seseña", "Sevilla La Nueva", "Somosierra", "Soto del Real", "Talamanca de Jarama", "Talamanca del Jarama",
            "Tielmes", "Titulcia", "Torrejón de Ardoz", "Torrejón de Velasco", "Torrejón de la Calzada", "Torrelaguna", "Torrelodones", "Torremocha de Jarama",
            "Torres de la Alameda", "Tres Cantos", "Valdaracete", "Valdeavero", "Valdelaguna", "Valdemanco", "Valdemaqueda", "Valdemorillo", "Valdemoro",
            "Valdeolmos-Alalpardo", "Valdepiélagos", "Valdetorres de Jarama", "Valdilecha", "Valverde de Alcalá", "Vega del Tajuña", "Velilla de San Antonio",
            "Venturada", "Villa del Prado", "Villaconejos", "Villalbilla", "Villamanrique de Tajo", "Villamanta", "Villamantilla", "Villanueva de Perales",
            "Villanueva de la Cañada", "Villanueva del Pardillo", "Villar del Olmo", "Villarejo de Salvanés", "Villaviciosa de Odón", "Villavieja del Lozoya", "Zarzalejo"],

        comunidades: ["Andalucía", "Aragón", "Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", "Ceuta", "Comunidad Valenciana",
            "Comunidad de Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja", "Melilla", "Navarra", "País Vasco", "Principado de Asturias", "Región de Murcia"],

        asuntos_email: {
            registro_de_Protectora: "Confirmación de registro",
            paraAdmin_errores_en_registro_protectora: "ERROR en el registro de protectora",
            paraAdmin_registro_de_Protectora: "Protectora registrada con exito",
            peticion_informacion_de_protectora: "Petición de información",
            interes_por_animal: "Interes por un animal",

            arrayExterno: ['Más información', 'Interés por el animal']
        },


        tipos_de_email: {
            registro_de_Protectora: "registro_de_Protectora",
            paraAdmin_errores_en_registro_protectora: "paraAdmin_errores_en_registro_protectora",
            paraAdmin_registro_de_Protectora: "paraAdmin_registro_de_Protectora",
            peticion_informacion_de_protectora: "peticion_informacion_de_protectora",
            interes_por_animal: "interes_por_animal",

        }

};