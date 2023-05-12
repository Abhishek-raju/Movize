import axios from "axios";


// const VITE_APP_TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWZjNmY2NWY5YjhmZDEzMjM5MzlmOWFjMWNjMDJmYiIsInN1YiI6IjY0NTM4M2NiZDQ4Y2VlMDExOWExMjE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3dZ4JM80E7IhL28kAwp43ezO9MNVKhUFJj34vyRBHHQ"

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWZjNmY2NWY5YjhmZDEzMjM5MzlmOWFjMWNjMDJmYiIsInN1YiI6IjY0NTM4M2NiZDQ4Y2VlMDExOWExMjE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3dZ4JM80E7IhL28kAwp43ezO9MNVKhUFJj34vyRBHHQ"
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url,params) =>{
    try{
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data;
    }catch(err){
        console.log(err);
        return err
    }
}

