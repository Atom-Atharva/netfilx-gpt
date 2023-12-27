import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img
                    src={BG_URL}
                    className="h-screen object-cover md:h-full"
                    alt="background"
                />
            </div>
            <div>
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    );
};

export default GPTSearch;
