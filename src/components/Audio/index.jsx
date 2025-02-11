import { useEffect, useRef, useState } from 'react'

import './style.css'

export default function Audio() {
    //http://local.api.brickmmo.com:7777/radio/next/1
    const[audioSrc, setAudioSrc] = useState("");
    const audioRef = useRef(null);

    useEffect(()=>{
        let getAudio = async()=>{
            const urlNext = "http://local.api.brickmmo.com:7777/radio/next/1";
            let resNext = await fetch(urlNext);
            let data_audio = await resNext.json();
            console.log(data_audio);
            let logId = data_audio.log.id;
            // console.log(data_audio.log.id);
            //http://local.api.brickmmo.com:7777/radio_queue/1.mp3
            const urlAudio  = "http://local.api.brickmmo.com:7777/radio_queue/";
            console.log(urlAudio+logId+".mp3");
            setAudioSrc(urlAudio+logId+".mp3");
        };
        getAudio();
    },[]);


    const playBtn = () =>{
        console.log("start play");
        if(audioRef.current){
            console.log("current Play works.")
            audioRef.current.play().catch(err => console.log("Play failed:", err));
        }
    }   
      
    
    return(
        <>
        <audio ref={audioRef} controls className="audio">
        <source src={audioSrc} type="audio/mp3" /> Your browser does not support the audio element. </audio>
        <button type='button' onClick={playBtn}>
        <img src='img/play-solid.svg' alt="play radio icon" style={{width:"2rem", backgroundColor:'transparent'}}/>
        </button>
        </>
    )
}