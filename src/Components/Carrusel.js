import  React,{ useState} from 'react';
import Card from '@mui/material/Card';


import Left from '@mui/icons-material/ArrowBackIosNew';
import Right  from '@mui/icons-material/ArrowForwardIos';






export default function Carrusel({video,commit}) {
   // console.log(commit[0])
// Ver como renderizar la card con el metodo map, ver el slider de my-porfolio


const [imgActual,setImgActual] = useState(0);
    
let cantidad = video?.length;

if(!Array.isArray(video) || cantidad === 0) return;

const siguienteImg = ()=>{
setImgActual(imgActual === cantidad -1 ? 0 : imgActual +1)
//console.log(cantidad)
}
const anteriorImg=()=>{
  setImgActual(imgActual === 0 ? cantidad -1 : imgActual -1)
//console.log(cantidad)
//console.log(imgActual)
    
}


  
  return (
  <div className='nn'>
  <div className='card-container'>
  
    <button className='btn L'  onClick={anteriorImg}><Left sx={{fontSize:60}}/></button>
    <div>
    <Card className='card'>
      <div className='conatiner-img'>
     {video.map((vide,index)=>{
       if(imgActual !== index) return false
    
       return(
    <video autoPlay="true"   key={index}  controls loop src={vide} className='imgCAR' />
       )
     })}
      </div>
    </Card>
      
    </div> 
    <button className='btn R' onClick={siguienteImg} ><Right  sx={{fontSize:60}}/></button>
  </div>
 
    
    {commit.map((el,index)=>{
  if(imgActual !== index) return false
    
    return(
        <figcaption className="figcaption-slider"  key={index} >{el.toUpperCase()}</figcaption>
    
    )
    })}
    
  
  
  </div>
  );
}



