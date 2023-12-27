import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    // Search Movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
                movie +
                "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );

        const json = await data.json();
        return json.results;
    };

    const handleGptSearchClick = async () => {
        // Make API Call to get movie Results--
        const searchQuery =
            "Acy as movie recommendation system, suggest me movies on query: " +
            searchText.current.value +
            ". Give me only 5 movies separated by commas no other text.";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: searchQuery }],
            model: "gpt-3.5-turbo",
        });

        // {
        //     "page": 1,
        //     "results": [
        //       {
        //         "adult": false,
        //         "backdrop_path": "/8YboYnoujBeWv4Galqnb7I0h9jf.jpg",
        //         "genre_ids": [
        //           35,
        //           10749,
        //           10751
        //         ],
        //         "id": 58128,
        //         "original_language": "hi",
        //         "original_title": "अंदाज़ अपना अपना",
        //         "overview": "Two slackers competing for the affections of an heiress inadvertently become her protectors from an evil criminal.",
        //         "popularity": 10.114,
        //         "poster_path": "/a0GV2V3yif2DbsMCSBrivvSHUWQ.jpg",
        //         "release_date": "1994-04-11",
        //         "title": "Andaz Apna Apna",
        //         "video": false,
        //         "vote_average": 6.8,
        //         "vote_count": 198
        //       }
        //     ],
        //     "total_pages": 1,
        //     "total_results": 1
        //   }

        if (!gptResults.choices) {
            //TODO: Write Some Error
        }

        console.log(gptResults.choices?.[0]?.message?.content);

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");
        console.log(gptMovies);

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // [Promise, Promise, Promise, Promise, Promise]

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);

        dispatch(
            addGptMovieResults({
                movieNames: gptMovies,
                movieResults: tmdbResults,
            })
        );
    };

    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
            <form
                className="bg-black grid grid-cols-12 w-full md:w-1/2"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className="m-4 p-4 col-span-9 rounded-md"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    className="m-4 bg-red-700 text-white col-span-3 rounded-md"
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
