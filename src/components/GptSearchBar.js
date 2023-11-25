import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black grid grid-cols-12 w-1/2">
                <input
                    type="text"
                    className="m-4 p-4 col-span-9 rounded-md"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button className="m-4 bg-red-700 text-white col-span-3 rounded-md">
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
