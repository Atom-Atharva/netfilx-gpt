import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="text-lg py-6 w-1/3">{overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-16 font-bold text-lg rounded-lg hover:bg-opacity-80">
                    ▷ Play
                </button>
                <button className="bg-gray-500 p-4 px-16 m-2 text-lg rounded-lg bg-opacity-50 hover:bg-opacity-80">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
