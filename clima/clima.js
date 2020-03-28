const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=049f45921b4282e971a7046541473d88&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}