const axios = require('axios');

const getClima = async(latitud, longitud) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=0beb17bc94309aa3d036a89fb413a937`);

    return respuesta.data.main.temp;
};

module.exports = {
    getClima
};