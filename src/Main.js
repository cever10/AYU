import React from "react";
import Header from "./Header";
import NavigationBav from "./NavigationBar";



const Main = () =>{
    return(
        <div>
            <NavigationBav/>
            <Header/>
            <main>
            <div>

                메인화면

            </div>
            </main>
        </div>
    );
};

export default Main;