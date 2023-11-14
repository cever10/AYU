import React, { useEffect, useState } from "react";

const Shortpage = () => {
    const [Videos, setVideos] = useState([]);

        useEffect(() => {
            //동영상 목록을 가져오는 비동기 함수 호출 혹은 API 요청
            const fetchVideos = async () =>{
                try{
                    //비동기 작업 수행 후 결과 setVideos로 업데이트 
                const videoDate = await yourApiCall();
                setVideos(videoDate);
                } catch (error){
                    console.error('Error fetching videos', error);
                }
            };
            fetchVideos();// 빈 배열은 컴포넌트가 처음 렌더링 될때만 호출 되도록 함
        }, []);

        return(
            <div>
                <h1>Shortpage</h1>
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