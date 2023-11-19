import React, {useState, useEffect}from "react";

const RecentUploades = () => {
    const [Videos, setVideos] = useState([]);

    useEffect(() => {
        
        fetchRecentUploads()
        .then((data) => {
            setVideos(data);
        })
        .catch((error) => {
            console.error('Error fetching recent uploads:', error);
        });
    }, []);
    return(
        <div className="recent-uploades">
            <h2>최근 업로드 영상</h2>
        </div>
    );
};

export default RecentUploades;

