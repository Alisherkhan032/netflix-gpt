import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();

    const url = "https://api.themoviedb.org/3/movie/popular?page=1";
    const getPopularMovies = async () => {
        try {
            const data = await fetch(url, API_OPTIONS);
            const json = await data.json();
        
            dispatch(addPopularMovies(json.results))
        } catch (error) {
                console.log(error)
        }
    };
    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;