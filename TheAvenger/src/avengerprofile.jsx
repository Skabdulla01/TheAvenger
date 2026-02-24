import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);


function avengerprofile(props) {
  const txtanimation = useRef();
  const zoomanimation = useRef();
  const topanimation = useRef();
  const zoomcircle = useRef();
  


  useGSAP(()=>{
    gsap.from(txtanimation.current,{
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger:{
        trigger: txtanimation.current,
        start: "top 80%",
        end: "top 100%",
        toggleActions: "play none none reverse",
        stagger: 0.3,
        scrub: 3,
        // markers: true
      }
    })
    gsap.from(zoomanimation.current,{
      scale: 0,
      opacity: 0,
      duration: 1,
      scrollTrigger:{
        trigger: zoomanimation.current,
        start: "top 120%",
        end: "top 120%",
        toggleActions: "play none none reverse",
        stagger: 0.3,
        scrub: 3,
        // markers: true
      }
    })
    gsap.from(zoomcircle.current,{
      scale: 0,
      opacity: 0,
      duration: 1,
      scrollTrigger:{
        trigger: zoomcircle.current,
        start: "top 100%",
        end: "top 100%",
        toggleActions: "play none none reverse",
        stagger: 0.3,
        scrub: 3,
        // markers: true
      }
    })
    gsap.from(topanimation.current,{
      scale: 0,
      opacity: 0,
      y:200,
      duration: 1,
      scrollTrigger:{
        trigger: topanimation.current,
        start: "top 110%",
        end: "top 110%",
        toggleActions: "play none none reverse",
        stagger: 0.3,
        scrub: 3,
        // markers: true
      }
    })
  })
  

  return (
    <>
    <main className='h-screen overflow-hidden w-full pt-4 flex flex-col items-center bg-[linear-gradient(135deg,#0F172A,#1E1B4B)]'>
      <div ref={topanimation} className="text-[4vw] max-[430px]:text-[10vw] leading-none font-bold">
        {/* <h1 className='bg-linear-to-r from-[#0A2A66] via-[#0F3F99] to-[#1454CC] bg-clip-text text-transparent'>{props.name}</h1> */}
        <h1 style={{background: `linear-gradient(to right, ${props.TextStroke}, ${props.colour1}, ${props.colour2})`,WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{props.name}</h1>
      </div>
      <div className="flex h-screen w-[90%] justify-between max-[430px]:justify-center max-[430px]:!flex-col max-[430px]:items-center" style={{ flexDirection: `${props.flexdirection}` }}>
        <div className="relative flex justify-center items-center max-[430px]:w-[90%] w-[40%]"> 
          <div className="h-[45vw] max-[430px]:h-[40vh] w-full flex justify-center items-start">
            <div ref={zoomcircle} className="w-[27vw] h-[27vw] max-[430px]:w-[60vw] max-[430px]:h-[60vw] rounded-full opacity-80" style={{background: `radial-gradient(circle, ${props.TextStroke} 0%, ${props.rgb} 100%)`}}></div>
          </div>
            <div ref={zoomanimation} className="absolute" style={{transform: props.scale}}>
              <img className='object-cover' src={props.png} alt="Captainamarica" />
            </div>
        </div>
        <div ref={txtanimation} className="h-[80vh] max-[430px]:h-[45vh] max-[430px]:w-[95%] w-[55%] flex flex-col justify-center">
          <h3 className='text-[#ffffff] text-bold text-[3.5vw] max-[430px]:text-[7vw]' style={{ WebkitTextStroke: `1px ${props.TextStroke}` }}>{props.realname}</h3>
          <p className='text-[#ffffff] text-[1.5vw] max-[430px]:text-[4vw] drop-shadow-xl'>{props.story}</p>
        </div>
      </div>
    </main>
    </>
  )
}

export default avengerprofile