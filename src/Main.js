import React from "react";
import Header from "./Header";
import NavigationBav from "./NavigationBar";
import Shortpage from "./ShortsPage";


const Main = () =>{
    return(
        <div>
            <NavigationBav/>
            <Header/>
            <main>
            <div>
                영상 넣기
                <Shortpage/>
            </div>
            </main>
        </div>
    );
};

export default Main;