import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
    // Fetch Data From TMDB API and UPDATE STORE--
    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        // Don't worry about 2 logs, It happen because of React.Strict (IT IS GOOD THING).
        // console.log(json.results);

        dispatch(addTrendingMovies(json.results));
    };

    useEffect(() => {
        getTrendingMovies();
    }, []);
};

export default useTrendingMovies;
