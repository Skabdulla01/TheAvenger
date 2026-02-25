import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ALogo from "./assets/Alogo.png"
import titleLogo from './assets/logo.png'

gsap.registerPlugin(ScrollTrigger);

function hero() {
    const zoomIn = useRef();
    const logoDisplay = useRef();
    const container = useRef();
    useGSAP(()=>{
        gsap.to(zoomIn.current,{
          scale:1,
          opacity:1,
          duration:1
        })
        const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=700",
          scrub: 3,        
          pin: true,       
          // markers: true,   
        }
      })
        tl.fromTo(zoomIn.current,{  
          // duration: 0.5,
          scale: 1.1,       
          duration: 1,           
        },{
          // duration: 0.5,
          scale: 0.6,
        })
        tl.to(zoomIn.current,{
          x:250,
          // duration:1,
        })
        tl.to(zoomIn.current,{
          x:-210,
          // duration:1,
          opacity: 0,
        })
        tl.from(logoDisplay.current,{
          opacity:0,
        },"<")
        tl.to(logoDisplay.current,{
          y: "62vh",
          scale: 0.5
        })
        
    },{scope: container.current})
  return (
    <>
    <div className="h-screen w-full flex  justify-center bg-[linear-gradient(135deg,#0F172A,#1E1B4B)]" ref={container}>
        <div className="fixed h-screen w-full flex items-center justify-center bg-[linear-gradient(135deg,#0F172A,#1E1B4B)]" >
          <img src={ALogo} ref={zoomIn} className='h-[50vh] w-[50vh]' alt="A" />
        </div>
        <div className="fixed h-screen w-full flex justify-center items-center">
        <img src={titleLogo} ref={logoDisplay} alt="A" />
        </div>
    </div>
    </>
  )
}

export default hero