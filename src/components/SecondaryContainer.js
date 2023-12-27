import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        movies && (
            <div className="bg-black">
                <div className="mt-0 md:-mt-52 pl-2 md:pl-12 relative z-20">
                    <MovieList
                        title={"Popular"}
                        movies={movies.popularMovies}
                    />
                    <MovieList
                        title={"Now Playing"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Trending"}
                        movies={movies.trendingMovies}
                    />
                    <MovieList
                        title={"Upcoming Movies"}
                        movies={movies.upcomingMovies}
                    />
                </div>
            </div>
        )
    );
};

export default SecondaryContainer;
