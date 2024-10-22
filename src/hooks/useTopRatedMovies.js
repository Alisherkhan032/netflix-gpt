import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

    const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";
    const getTopRatedMovies = async () => {
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        
        dispatch(addTopRatedMovies(json.results))
    };
    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;