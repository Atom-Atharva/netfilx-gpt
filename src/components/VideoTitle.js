import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:inline-block text-lg py-6 w-2/3">
                {overview}
            </p>
            <div>
                <button className="bg-white text-black px-4 py-1 my-2 md:p-4 md:px-16 md:my-0 font-bold text-lg rounded-lg hover:bg-opacity-80">
                    ▷ Play
                </button>
                <button className="hidden md:inline-block bg-gray-500 p-4 px-16 m-2 text-lg rounded-lg bg-opacity-50 hover:bg-opacity-80">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
