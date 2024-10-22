import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const getNowPlayingMovie = async () => {
       try{
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        
        dispatch(addNowPlayingMovies(json.results))
       }catch(err){
            console.log(err)
       }
    };
    useEffect(() => {
        getNowPlayingMovie();
    }, []);
}

export default useNowPlayingMovies;