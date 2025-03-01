import { useContext, useEffect, useState, useRef } from "react";
import { LogContext } from "../Context/LogContext";
import { ScheduleContext } from "../Context/ScheduleContext";
import { CityContext } from "../Context/CityContext";
import "./style.css";

export default function RadioLogID({setIsPlaying}) {
    let { LogID, setLogID } = useContext(LogContext);
    let { ScheduleID, setScheduleID } = useContext(ScheduleContext);
    const audioRef = useRef(null);
    const [audioSrc, setAudioSrc] = useState('./radio/8.mp3');

    useEffect(() => {
        setLogID(1); 
        setScheduleID(1); 
    }, []);

    useEffect(() => {
        if (LogID) {
            const urlAudio = `./radio/${LogID}.mp3`;
            setAudioSrc(urlAudio);
            console.log("set audio source");
        }
    }, [LogID]);

    useEffect(() => {
        if (audioSrc) {
            const myAudio = audioRef.current;
            myAudio.load(); 
            myAudio.play().catch(error => {
                console.error("Audio play failed:", error);
            })
        }
    }, [audioSrc]);

    useEffect(()=>{               
        const myAudio = audioRef.current;  
        // console.log("audio source: ",audioSrc);
        const playNext = ()=>{
            setLogID(prevLogID => prevLogID + 1); 
            setScheduleID(prevScheduleID => prevScheduleID + 1);
            };
        const handlePlay =()=>{
            setIsPlaying(true);
        };
        const handlePause =()=>{
            setIsPlaying(false);
        }
        myAudio.addEventListener("ended",playNext);
        myAudio.addEventListener("play",handlePlay);
        myAudio.addEventListener("pause",handlePause);
        return () => {
            myAudio.removeEventListener("ended", playNext);
            myAudio.removeEventListener("play",handlePlay);
            myAudio.removeEventListener("pause",handlePause);
        };
    }, [audioSrc,setIsPlaying]);


    useEffect(() => {
        console.log("ScheduleID updated:", ScheduleID);
    }, [ScheduleID]);

    return (
        <>
            <audio src={audioSrc} ref={audioRef} controls className="audio">
                Your browser does not support the audio element.
            </audio>
        </>
    );
}