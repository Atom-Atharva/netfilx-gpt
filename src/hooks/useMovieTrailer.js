import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

function useMovieTrailer(movieId) {
    // Fetching Trailer Video and Updating Store--
    const dispatch = useDispatch();
    const movieTrailer = useSelector((store) => store.movies.trailerVideo);

    //Fetch Trailer Video--
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
                movieId +
                "/videos?language=en-US",
            API_OPTIONS
        );

        const json = await data.json();
        // console.log(json);

        const filterData = json.results.filter(
            (video) => video.type === "Trailer"
        );

        const trailer =
            filterData.length === 0 ? json.results[0] : filterData[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
        !movieTrailer && getMovieVideos();
    }, []);
}

export default useMovieTrailer;
