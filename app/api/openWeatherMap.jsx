var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=4c50153c429864970a23fd419a10233e&units=imperial';


// 4c50153c429864970a23fd419a10233e
module.exports ={
    getTemp: function(city){
        var encodedLocation = encodeURIComponent(city);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }

        }, function(res){
            throw new Error(res.data.message)
        });
    }
}