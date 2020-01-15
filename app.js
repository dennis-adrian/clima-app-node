const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');
const argv = require('./config/yargs').argv;

let getInfo = async(direccion) => {
    try {

        let coords = await lugar.getlugarLatLng(direccion);
        let temp = await clima.getClima(coords.latitud, coords.longitud)

        return `La temperatura en ${coords.address} es de ${temp} Celsius`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    };

};

getInfo(argv.direccion)
    .then(respuesta => console.log(respuesta))
    .catch(e => console.log(e));

// lugar.getlugarLatLng(argv.direccion)
//     .then(respuesta => {
//         console.log(respuesta);
//     })
//     .catch(error => console.log(error));

// clima.getClima(53.34806823730469, -6.248270034790039)
//     .then(respuesta => console.log(respuesta))
//     .catch(error => console.log(error));