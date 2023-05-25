import React from "react";

import Card from "./Card"
import img from "../../assets/card/imgcard.png"
import motor from "../../assets/card/motor.jpeg"
import interior from "../../assets/card/interior.jpg"
import abrillantado from "../../assets/card/abrillantado.jpeg"
import acrilico from "../../assets/card/acrilico1.jpg"
import ceramico from "../../assets/card/ceramico.jpg"
import microBollo from "../../assets/card/microB.jpg"

import "./Cardss.css"

// Icon wpp
import { Icon } from '@iconify/react';


// pdf que me mando joni
import {lavadoP} from "./Data"
import { lavadoM } from "./Data";
import { lavadoI } from "./Data";
import { tAbrillantado } from "./Data";
import { tAcrilico } from "./Data";
import { tCeramico } from "./Data";
import {microB} from "./Data"

//console.log(lavadoM)

const title =(data)=>{
return(
  <div className="container-detalle" >
      <div className="info">
      <h1 className="title-card">{data.serv}</h1>
      </div>
    <hr style={{width:"90%"}} />
      
    <div className="detail">
    <p >{data.detail}</p>
    </div>                              
    
    <hr className="hrr"/>
    <a href={`https://api.whatsapp.com/send?phone=3513175522&text=🔥Hola,me interesa el Servicio de ${data.serv}🔥`} target="_blank" rel="noopener"  >{data.valor ?<h3> $ {data.valor }</h3> : <Icon icon="ic:sharp-whatsapp" className="wppCard" />} </a>
  </div>
)
}



export default function Cards(){
return(
<div className="ser-vice">
      <Card frontContent={title(lavadoP)} backContent={img} />
      <Card frontContent={title(lavadoM)}  backContent={motor} />
      <Card frontContent={title(tAbrillantado)}  backContent={abrillantado} />
      <Card frontContent={title(lavadoI)} backContent={interior} />
      <Card frontContent={title(tCeramico)}  backContent={ceramico} />
      <Card frontContent={title(tAcrilico)}  backContent={acrilico} />
      <Card frontContent={title(microB)}  backContent={microBollo} />
    
</div>
)
}
//style={{fontSize:36, textAlign:"center",padding:1,margin:15 ,height:400}}