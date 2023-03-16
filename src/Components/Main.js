import React from "react";
import Header from "./Header";
import Data from "./Data";
export default function Main(){
return(
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

   <Header/>
    <div className="container-card">
    <Data/>
    </div>
   
    <br></br>
    <br></br>
    </div>
)
}