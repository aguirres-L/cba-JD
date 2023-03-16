// import img 

import React  from "react"
import mbw from "../assets/bmw.mp4"
import vento from "../assets/vento.mp4"
import etios from "../assets/toyotaEtios.mp4"
import etios2 from "../assets/toyotaEtios2.mp4"
import peugot206 from "../assets/peugot208.mp4"
import golTren from "../assets/golTren.mp4"
import fox from "../assets/fox.mp4"
import chata from "../assets/chataFIAT.mp4"
import AudiA1 from "../assets/AudiA1.mp4"

import AudiA5 from "../assets/audiA5.mp4"
import AudiA5B from "../assets/audiA5Black.mp4"

import Carrusel from "./Carrusel"



export default function Data() {

  const video1 =[
    AudiA5B,AudiA5,AudiA1,chata,fox,golTren,peugot206,etios,etios2,vento,mbw
  ]
  const Detail =[
  "Abrillantadopremium ✅️🔥","TRATAMIENTO ACRÍLICO✨️","💎LIMPIEZA DE INTERIOR"," DESCONTAMINADO TRATAMIENTO CERÁMICO LIMPIEZA DE INTERIOR PULIDO DE ÓPTICAS","lavadopremium ✅️🔥 ","ASI SE ENTREGÓ ESTE HERMOSO GOL TREND, SE LE REALIZO UN ABRILLANTADO PREMIUM LIMPIEZA DE MOTOR Y PULIDO DE ÓPTICAS.",
  "LES IBA A CONTAR ESTA PELI..PERO YA VIERON EL FINAL...🤯💣💥","⚠️NUEVO DESAFÍO⚠️ABRILLANTADO TOYOTA ETIOS⚠️LIMPIEZA DE INTERIOR⚠️LAVADO DE MOTOR","CAMBIO UN POCO EL ETIOS 🤪Realizamos 👇🏽- LAVADO PREMIUM- ABRILLANTADO PREMIUM- LIMPIEZA DE INTERIOR"
  ,"🔥 LAVADO VIP🔥 LIMPIEZA DE INTERIOR🔥 NUTRICIÓN DE CUEROS","Hermosa experiencia poder trabajar esta unidad.. y como dice la canción siempre agradecido.. cada cliente, cada consulta y a Dios sobretodo 🙌🏼👉🏽LE REALIZAMOS: LAVADO PREMIUM. DESCONTAMINADO. ELIMINACIÓN PIEL DE 🍑 TRATAMIENTO CERÁMICO."]
  

  
  return(
  <>
  <Carrusel video = {video1} commit={Detail}/>
  </>
  )}