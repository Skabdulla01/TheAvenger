import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ironmanphoto from './assets/iron.jpg'
import captainamaricaphoto from './assets/cap.jpg'
import thorphoto from './assets/thor.jpg'
import hulkphoto from './assets/hulk.jpg'
import blackwidowphoto from './assets/blackw.jpg'
import hawkeyephoto from './assets/hawk.jpg'
import avengerlogo from './assets/logo2.png'

import marvel from "./assets/marvellogo.png"

gsap.registerPlugin(ScrollTrigger);


function avengersassemble() {
  const zoomanimation = useRef();
  const mainConatiner = useRef();
  const marvellogo = useRef();
  

  useGSAP(()=>{
    gsap.from(zoomanimation.current,{
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 2,
      scrollTrigger:{
        trigger: zoomanimation.current,
        start: "top 90%",
        end: "top 90%",
        toggleActions: "play none none reverse",
        scrub: 3,
        markers: true
      }
    })
    gsap.from(".upanimation",{
      y: -770,
      duration: 1,
      scrollTrigger:{
        trigger: ".upanimation",
        start: "bottom top",
        // end: "bottom 30%",
        toggleActions: "play none none reverse",
        scrub: 3,
        // markers: true
      }
    })
    gsap.from(".downanimation",{
      y: 1000,
      duration: 1,
      scrollTrigger:{
        trigger: ".upanimation",
        start: "bottom top",
        // end: "top 20%",
        toggleActions: "play none none reverse",
        scrub: 3,
        // markers: true
      }
    })
    gsap.from(marvellogo.current,{
      scale:0,
      opacity:1,
      duration: 1,
      scrollTrigger:{
        trigger: mainConatiner.current,
        start: "top 60%",
        end: "top 30%",
        toggleActions: "play none none reverse",
        scrub: 3,
        // markers: true
      }
    })
  },{ scope: mainConatiner.current })
  

  return (
    <>
    <main ref={mainConatiner} className='relative overflow-hidden flex justify-center h-screen w-full bg-[linear-gradient(135deg,#0F172A,#1E1B4B)]'>
      <div className="absolute flex items-center justify-center h-screen w-full">
        <img src={marvel} ref={marvellogo} className='scale-200' alt="marvel logo" />
      </div>
        <div className="h-screen w-full flex overflow-hidden">
            <div className="upanimation h-screen w-full flex justifly-center items-center overflow-hidden"><img className='h-screen scale-110 object-[60%_10%] object-cover brightness-55' src={hulkphoto} alt="hulkphoto" /></div>
            <div className="downanimation h-screen w-full flex justifly-center items-center overflow-hidden"><img className='h-screen scale-110 object-[39%_9%] object-cover brightness-55' src={thorphoto} alt="thorphoto" /></div>
            <div className="upanimation h-screen w-full flex justifly-center items-center overflow-hidden"><img className='h-screen scale-110 object-[46%_4%] object-cover brightness-55' src={ironmanphoto} alt="ironmanphoto" /></div>
            <div className="downanimation h-screen w-full flex justifly-center items-center overflow-hidden"><img className='h-screen scale-110 object-[54%_4%] object-cover brightness-55' src={captainamaricaphoto} alt="captainamaricaphoto" /></div>
            <div className="upanimation h-screen w-full flex justifly-center items-center overflow-hidden"><img className='h-screen scale-110 object-[58%_8%] object-cover brightness-55' src={blackwidowphoto} alt="blackwidowphoto" /></div>
            <div className="downanimation h-screen w-full flex justifly-center items-center overflow-hidden"><img className='h-screen scale-110 object-[50%_0%] object-cover brightness-55' src={hawkeyephoto} alt="hawkeyephoto" /></div>
        </div>
        <div ref={zoomanimation} className="absolute -bottom-50 z-10"><img className='object-cover' src={avengerlogo} alt="avengerlogo" /></div>
    </main>
    </>
  )
}

export default avengersassemble