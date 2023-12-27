import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    // Fetch Data From TMDB API and UPDATE STORE--
    const dispatch = useDispatch();
    const popularMovie = useSelector((store) => store.movies.popularMovies);

    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        // Don't worry about 2 logs, It happen because of React.Strict (IT IS GOOD THING).
        // console.log(json.results);

        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        !popularMovie&& getPopularMovies();
    }, []);
};

export default usePopularMovies;
