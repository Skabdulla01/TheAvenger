import React, { useRef } from 'react'
import alogo from './assets/Alogo.png'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

function loading() {
  const refloader =useRef()

  useGSAP(()=>{
    gsap.from(refloader.current,{
      rotate: -360,
      duration: 1,
      repeat:-1,
      repeatDelay:1,
      
    })
  })

  return (
    <>
    <main className="bg-[linear-gradient(135deg,#0F172A,#1E1B4B)] h-screen w-full flex justify-center items-center">
        <div ref={refloader} className="h-[20vw] w-[20vw]"><img src={alogo} alt="A" /></div>
    </main>
    </>
  )
}

export default loading