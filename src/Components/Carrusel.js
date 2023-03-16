import  React,{useState} from 'react';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
//import { CardActionArea } from '@mui/material';

//import img from "./assets/332433493_924479638995383_1460718894520833905.jpg"






export default function Carrusel({video,commit}) {
    console.log(commit[0])
// Ver como renderizar la card con el metodo map, ver el slider de my-porfolio

const [imgActual,setImgActual] = useState(0);
    
let cantidad = video?.length;

if(!Array.isArray(video) || cantidad === 0) return;

const siguienteImg = ()=>{
setImgActual(imgActual === cantidad -1 ? 0 : imgActual +1)
//console.log(cantidad)
}
const anteriorImg=()=>{
    setImgActual(imgActual === cantidad -1 ? 0 : imgActual +1)
//console.log(cantidad)
//console.log(imgActual)
    
}
  
  return (
  <div className='nn'>
  <div className='card-container'>
  
    <button className='btn L'onClick={anteriorImg}>◀</button>
    <div>
    <Card className='card'>
      <div className='conatiner-img'>
     {video.map((vide,index)=>{
       if(imgActual !== index) return false
    
       return(
    <video autoPlay="true"  key={index}  controls loop src={vide} className='imgCAR' />
       )
     })}
      </div>
    </Card>
      
    </div> 
    <button className='btn R' onClick={siguienteImg} >▶</button>
  </div>
 
    
    {commit.map((el,index)=>{
  if(imgActual !== index) return false
    
    return(
        <figcaption className="figcaption-slider"  key={index} >{el}</figcaption>
    
    )
    })}
    
  
  
  </div>
  );
}



/* 

    card para img

 <div>    
    <Card className='card'>
      <div className='conatiner-img'>
      <img src={img} className='imgCAR' />
        
      </div>
      
    
    </Card>
    <p>hola</p>  
  </div>
    


*/