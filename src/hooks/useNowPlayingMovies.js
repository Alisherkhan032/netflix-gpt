import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const getNowPlayingMovie = async () => {
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        
        dispatch(addNowPlayingMovies(json.results))
    };
    useEffect(() => {
        getNowPlayingMovie();
    }, []);
}

export default useNowPlayingMovies;