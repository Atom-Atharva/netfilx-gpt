import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
    // Custom Hooks--
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />

            <MainContainer />
            <SecondaryContainer />

            {/**
                Main Container
                    - Video Background
                    - Video Title

                Secondary Container
                    - MovieList * N
                        - Cards * N
             */}
        </div>
    );
};

export default Browse;
