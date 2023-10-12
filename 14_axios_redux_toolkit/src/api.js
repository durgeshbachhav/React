import axios from 'axios'

export const fetchUserDataApi = async()=>{
     try {
          const response = await axios.get('https://randomuser.me/api/');
          return response.data.results[0];
     } catch (error) {
          console.log(error);
     }
}