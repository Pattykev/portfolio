import React from "react";
import imgLink from "/home/patricia/Desktop/TMPK-Image/portfolio/src/assets/browser.png";

function Error(){
    return(
        <main >
            <img className="w-1/5 m-auto p-8" src={imgLink} alt="Error image" />
            <div className="text-[28px] text-center"> 
                Ooops! Page not found. Check your Url.
            </div>
        </main>
       
    );
}
export default Error;