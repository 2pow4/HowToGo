import axios from 'axios';
const API_HOST = process.env.API_HOST || 'http://localhost:5000/api';


class HowToGoService {

    getLocations(){
        return axios.get(`${API_HOST}/locations`)
                .catch(function(error){
                    console.log(error)
                    }
                );
    }
    
    getRoutes(queryParams){
        return axios.get(`${API_HOST}/routes`, {
            params:{
                departure_city_id: queryParams.departure_city_id,
                arrival_city_id: queryParams.arrival_city_id,
                departure_time: queryParams.departure_time
            }
        }).catch(function(error){
            console.log(error)
            }
        );
    }
}

export default HowToGoService;