import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    // Custom Hook--
    useNowPlayingMovies();

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
