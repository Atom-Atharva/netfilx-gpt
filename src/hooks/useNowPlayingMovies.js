import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    // Fetch Data From TMDB API and UPDATE STORE--
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        // Don't worry about 2 logs, It happen because of React.Strict (IT IS GOOD THING).
        // console.log(json.results);

        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;
