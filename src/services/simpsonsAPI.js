import axios from "axios";

export const fetchSimpson = async () =>{
    const response = await axios.get('https://thesimpsonsapi.com/api/characters')

    return response.data
}