import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

    const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";
    const getUpcomingMovies = async () => {
        try {
            const data = await fetch(url, API_OPTIONS);
            const json = await data.json();
            
            dispatch(addUpcomingMovies(json.results))
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useTopRatedMovies;