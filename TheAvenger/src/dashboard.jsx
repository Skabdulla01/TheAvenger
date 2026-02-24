import React from 'react'
import { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Hero from './hero'
import Avengersassemble from './avengersassemble'
import Avengerprofile from './avengerprofile'

import captainamaricapng from './assets/ca.png'
import ironmanpng from './assets/ironman.png'
import thorpng from './assets/thor.png'
import blackwidowpng from './assets/bw.png'
import hulkpng from './assets/hulk2012.png'
import hawkeyepng from './assets/hw.png'

import Avengerposterimg from './assets/theavenger.jpg'
import Captainamaricaimg from './assets/capposter.jpg'
import hawkeyeimg from './assets/hawkeyeposter.jpg'
import Hulkimg from './assets/hulkposter.jpg'
import Ironposterimg from './assets/ironmanposter.jpg'
import Thorimg from './assets/thorposter.jpg'
import blackwidowimg from './assets/bwposter.jpg' 

import Poster from './poster';


import { captainAmarica,ironman,thor,blackWidow,hulk,hawkeye } from './avengerdata'

gsap.registerPlugin(ScrollTrigger);

function dashboard() {
    const displayAvenger = useRef();
  const displayCaptainamarica = useRef();
  const displayIronman = useRef();
  const displayThor = useRef();
  const displayBlackwidow = useRef();
  const displayHulk = useRef();
  const displayHawkeye = useRef();
  const homebtn = useRef();

  const [posters,setposter] = useState()
  // const [avenger,setavenger] =useState(0)
  // const [Captainamarica,setCaptainamarica] =useState(0)
  // const [Ironman,setIronman] =useState(0)
  // const [Thor,setThor] =useState(0)
  // const [Blackwidow,setBlackwidow] =useState(0)
  // const [Hulk,setHulk] =useState(0)
  // const [Hawkeye,setHawkeye] =useState(0)
  const [btn,setbtn] = useState("")

  const scrolltohome = ()=>{
    displayAvenger.current.scrollIntoView({ behavior: "smooth" });
  }

  useGSAP(()=>{
    gsap.from(homebtn.current,{
      scrollTrigger:{
        trigger: homebtn.current,
        onEnter: () => setbtn("none"),
        onLeave: () => setbtn(""),
        onEnterBack: () => setbtn("none"),
        onLeaveBack: () => setbtn(""),
      }
    })
    gsap.to(displayAvenger.current,{
      scrollTrigger:{
        trigger: displayAvenger.current,
        onEnter: () => setposter(Avengerposterimg),
        onLeave: () => setposter(Captainamaricaimg),
        onEnterBack: () => setposter(Avengerposterimg),
        onLeaveBack: () => setposter(Captainamaricaimg),      
        }
    })
    gsap.to(displayCaptainamarica.current,{
      scrollTrigger:{
        trigger: displayCaptainamarica.current,
        onEnter: () => setposter(Captainamaricaimg),
        onLeave: () => setposter(Ironposterimg),
        onEnterBack: () => setposter(Captainamaricaimg),
        onLeaveBack: () => setposter(Ironposterimg), 
      }
    })
    gsap.to(displayIronman.current,{
      scrollTrigger:{
        trigger: displayIronman.current,
        onEnter: () => setposter(Ironposterimg),
        onLeave: () => setposter(Thorimg),
        onEnterBack: () => setposter(Ironposterimg),
        onLeaveBack: () => setposter(Thorimg),
      }
    })
    gsap.to(displayThor.current,{
      scrollTrigger:{
        trigger: displayThor.current,
        onEnter: () => setposter(Thorimg),
        onLeave: () => setposter(blackwidowimg),
        onEnterBack: () => setposter(Thorimg),
        onLeaveBack: () => setposter(blackwidowimg),
      }
    })
    gsap.to(displayBlackwidow.current,{
      scrollTrigger:{
        trigger: displayBlackwidow.current,
        onEnter: () => setposter(blackwidowimg),
        onLeave: () => setposter(Hulkimg),
        onEnterBack: () => setposter(blackwidowimg),
        onLeaveBack: () => setposter(Hulkimg),
      }
    })
    gsap.to(displayHulk.current,{
      scrollTrigger:{
        trigger: displayHulk.current,
        onEnter: () => setposter(Hulkimg),
        onLeave: () => setposter(hawkeyeimg),
        onEnterBack: () => setposter(Hulkimg),
        onLeaveBack: () => setposter(hawkeyeimg),
      }
    })

    gsap.to(displayHawkeye.current,{
      scrollTrigger:{
        trigger: displayHawkeye.current,
        onEnter: () => setposter(hawkeyeimg),
        onLeave: () => setposter("none"),
        onEnterBack: () => setposter(hawkeyeimg),
        onLeaveBack: () => setposter("none"),
      }
    })
    
  })
  return (
    <>
      {/* <Avengerprofile flexdirection="row" name={captainAmarica.hero} story={captainAmarica.story} realname={captainAmarica.realname} png={captainamaricapng} TextStroke={captainAmarica.TextStroke} colour1={captainAmarica.colour1} colour2={captainAmarica.colour2} rgb={captainAmarica.rgb} scale="scale(0.6)"/> */}

    <button onClick={scrolltohome} ref={homebtn} style={{display: `${btn}`}} className='fixed z-200 rounded-2xl h-[4vw] w-[4vw] flex justify-center cursor-pointer items-center bottom-5 right-5 hover:bg-[linear-gradient(135deg,#0F172A,#1E1B4B)]'><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M452-244v-400L282-477l-42-43 241-241 241 241-42 42-168-168v402h-60Z"/></svg></button>
      <Poster poster={posters}/>
      <Hero />
      <div ref={displayAvenger} className="relative h-screen w-full bg-transparent">
        <div className="absolute top-0 h-screen w-full flex flex-col justify-end p-[3vw]" >
            <h2  className='text-[4.2vw] max-[430px]:text-[9vw] leading-none text-transparent [-webkit-text-stroke:2px_#FF1F26]'>There was an idea…</h2>
            <div className="flex items-center">
                <h2  className='text-[2.6vw] max-[430px]:text-[5vw] leading-none h-auto w-[12%] max-[430px]:w-[45%] text-[#FFFFFF]'>To Bring Together a Group of</h2>
                <h2 className='text-[9.7vw] max-[430px]:text-[15vw] leading-none text-transparent [-webkit-text-stroke:2px_#FF1F26]'>Remarkable</h2>
            </div>
            <p className='text-[2.6vw] max-[430px]:text-[5vw] max-[430px]:text-right leading-none text-[#FFFFFF]'>To see if they could become <span className='text-[4.2vw] max-[430px]:text-[8vw] leading-none text-transparent [-webkit-text-stroke:2px_#FF1F26]'>Something</span> more.</p>
        </div>
      </div>
      <Avengerprofile flexdirection="row" name={captainAmarica.hero} story={captainAmarica.story} realname={captainAmarica.realname} png={captainamaricapng} TextStroke={captainAmarica.TextStroke} colour1={captainAmarica.colour1} colour2={captainAmarica.colour2} rgb={captainAmarica.rgb} scale="scale(0.6)"/>
      <div ref={displayCaptainamarica} className="relative h-screen w-full bg-transparent">
        <div className="absolute top-0 h-screen w-full flex justify-center gap-[47vw] max-[430px]:gap-0 max-[430px]:flex-col items-center" >
          <div className="flex w-[20%] max-[430px]:w-[60%] max-[430px]:text-center pl-[9vw] items-center">
              <h2 className='text-[9.7vw] max-[430px]:text-[25vw] leading-none text-transparent [-webkit-text-stroke:2px_#0A2A66]'>I</h2>
              <h2 className='text-[2.6vw] max-[430px]:text-[10vw] max-[430px]:w-[80%] h-auto leading-none  text-[#0A2A66]'>can do this all</h2>
          </div>
          <div className="flex items-center max-[430px]:justify-center max-[430px]:w-[60%]">
            <h2 className='text-[9.7vw] max-[430px]:text-[25vw] leading-none text-transparent [-webkit-text-stroke:2px_#0A2A66]'>Day</h2>
          </div>
      </div>
      </div>
      <Avengerprofile flexdirection="row-reverse" name={ironman.hero} story={ironman.story} realname={ironman.realname} png={ironmanpng} TextStroke={ironman.TextStroke} colour1={ironman.colour1} colour2={ironman.colour2} rgb={ironman.rgb} scale="scale(0.53)"/>
      <div ref={displayIronman} className="relative h-screen w-full bg-transparent">
        <div className="absolute top-0 h-screen w-full p-[3vw] flex flex-col justify-end" >
          <h2 className='text-[4vw]  max-[430px]:text-[12vw] leading-none text-[#B11313]'>I Am</h2>
          <h2 className='text-[10vw] max-[430px]:text-[20vw]  leading-none text-transparent [-webkit-text-stroke:2px_#B11313]'>IRONMAN</h2>
        </div>
      </div>
      <Avengerprofile flexdirection="row" name={thor.hero} story={thor.story} realname={thor.realname} png={thorpng} TextStroke={thor.TextStroke} colour1={thor.colour1} colour2={thor.colour2} rgb={thor.rgb} scale="scale(0.9)"/>
      <div ref={displayThor} className="relative h-screen w-full bg-transparent">
        <div className="absolute top-0 h-screen w-full flex flex-col" >
      <div className="w-[38%] max-[430px]:w-[45%] pt-[10vw] flex flex-col items-end">
        <div className="flex">
            <h2 className='text-[2.6vw] max-[430px]:text-[5vw] flex items-end leading-none pb-3 text-[#1F4FD8]'>I am </h2>
            <h2 className='text-[9.7vw] max-[430px]:text-[12vw] leading-none text-transparent [-webkit-text-stroke:2px_#1F4FD8]'>THOR</h2>
        </div>
        <h2 className='text-[4vw] max-[430px]:text-[8vw] leading-none text-[#1F4FD8]'>son of Odin</h2>
      </div>
    </div>
      </div>
      <Avengerprofile flexdirection="row-reverse" name={blackWidow.hero} story={blackWidow.story} realname={blackWidow.realname} png={blackwidowpng} TextStroke={blackWidow.TextStroke} colour1={blackWidow.colour1} colour2={blackWidow.colour2} rgb={blackWidow.rgb} scale="scale(0.37)"/>
      <div ref={displayBlackwidow} className="relative h-screen w-full bg-transparent">
        <div className="absolute top-0 h-screen w-full flex justify-center gap-[35vw] max-[430px]:gap-[25vw] items-center" >
                  <div className="flex items-start pl-[5vw] max-[430px]:pl-0 h-[55vh]">
                      <div className="h-[30vh] max-[430px]:h-[15vh] flex ">
                          <div className="flex items-start">
                              <h2 className='text-[4vw] max-[430px]:text-[6vw] h-auto leading-none text-[#0A0A0A]'>At</h2>
                          </div>
                          <div className="flex items-center">
                              <h2 className='text-[4vw] max-[430px]:text-[6vw] h-auto leading-none text-[#0A0A0A]'>some</h2>
                          </div>
                          <div className="flex items-end">
                              <h2 className='text-[4vw] max-[430px]:text-[6vw] h-auto leading-none text-[#0A0A0A]'>point,</h2>
                          </div>
                      </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                      <h2 className='text-[3vw] max-[430px]:text-[5vw] h-auto leading-none  text-[#0A0A0A]'>we all</h2>
                      <h2 className='text-[6vw] max-[430px]:text-[8vw] h-auto leading-none  text-[#0A0A0A]'>have to</h2>
                      <h2 className='text-[9.7vw] max-[430px]:text-[12vw] leading-none text-transparent [-webkit-text-stroke:1px_#0A0A0A]'>Choose</h2>
                  </div>                
              </div>
      </div>
      <Avengerprofile flexdirection="row" name={hulk.hero} story={hulk.story} realname={hulk.realname} png={hulkpng} TextStroke={hulk.TextStroke} colour1={hulk.colour1} colour2={hulk.colour2} rgb={hulk.rgb} scale="scale(0.9)"/>
      <div ref={displayHulk} className="relative h-screen w-full bg-transparent">
        <div className="absolute top-0 h-screen w-full flex flex-col justify-center items-end" >
          <div className="w-[47%] max-[430px]:w-[60%]">
            <h2 className='text-[9vw]  max-[430px]:text-[15vw] leading-none text-[#5FAE3E]'>I’m</h2>
            <h2 className='text-[9vw]  max-[430px]:text-[15vw] leading-none text-[#5FAE3E]'>always</h2>
            <h2 className='text-[12vw] max-[430px]:text-[20vw] leading-none text-transparent [-webkit-text-stroke:2px_#5FAE3E]'>Angry</h2>
          </div>
        </div>
      </div>
      <Avengerprofile flexdirection="row-reverse" name={hawkeye.hero} story={hawkeye.story} realname={hawkeye.realname} png={hawkeyepng} TextStroke={hawkeye.TextStroke} colour1={hawkeye.colour1} colour2={hawkeye.colour2} rgb={hawkeye.rgb} scale="scale(0.7)" /> 
      <div ref={displayHawkeye} className="relative h-screen w-full bg-transparent">
        <div className="absolute top-0 h-screen w-full flex justify-center items-center" >
        <div className="w-[80%] h-[95vh] flex justify-between ">
          <div className="h-full pb-20 flex flex-col justify-center">
              <h2 className='text-[5vw] max-[430px]:text-[10vw] h-auto leading-none  text-[#6A0DAD]'>I’m just</h2>
              <h2 className='text-[3.5vw] max-[430px]:text-[7vw] h-auto leading-none  text-[#6A0DAD]'>a guy with a</h2>
          </div>
          <div className="flex items-end h-full">
            <h2 className='text-[11vw] max-[430px]:text-[22vw] leading-none text-transparent [-webkit-text-stroke:3px_#6A0DAD]'>Bow</h2>
          </div>
        </div>
      </div>
      </div>
      <Avengersassemble />
    </>
  )
}

export default dashboard