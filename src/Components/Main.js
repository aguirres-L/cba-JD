import React from "react";
import Header from "./Header";
import Data from "./Data";
import Cards from "./Cards/Cards";
export default function Main(){
return(
    <div className="divRed">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

   <Header/>
    <div className="container-card">
         <Data/>
    </div>
    <hr style={{width:"40%"}} />
     <Cards/>
    
    <br></br>
    <br></br>
    </div>
)
}