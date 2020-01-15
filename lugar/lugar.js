const axios = require('axios');

const getlugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion)

    let respuesta = await axios.get(`http://dev.virtualearth.net/REST/v1/Locations/${encodedUrl}?key=Akdo0ugdZEHzZgfLp8uCRTsAw880wwrfMhM-4K_IUsWblLsWi7ucx6DfenSICCSM`);

    if (respuesta.data.resourceSets[0].estimatedTotal === 0) {
        throw new Error(`No hay resultados para la búsqueda ${direccion}`);
    };

    let location = respuesta.data.resourceSets[0].resources[0].address;
    let coordenadas = respuesta.data.resourceSets[0].resources[0].point.coordinates;

    return {
        address: location.formattedAddress,
        latitud: coordenadas[0],
        longitud: coordenadas[1],
    }
};

module.exports = {
    getlugarLatLng
}