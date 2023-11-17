import React from "react";

const Shortpage = () => {
    
        return(
            <div>
                <h1>Shortpage입니다.</h1>
                <div>
            {Videos.map((video) => (
            <div key={video.id}><h2>{video.title}</h2>
            <p>{video.description}</p>
            </div>
            ))}
            </div>
            </div>
        );
};

export default Shortpage;