import { useContext, useEffect, useState, useRef } from "react";
import { LogContext } from "../Context/LogContext";
import { ScheduleContext } from "../Context/ScheduleContext";
import { CityContext } from "../Context/CityContext";
import "./style.css";

export default function RadioLogID({setIsPlaying}) {
    const { LogID, setLogID } = useContext(LogContext);
    const { ScheduleID, setScheduleID } = useContext(ScheduleContext);
    const { CityID } = useContext(CityContext);
    const audioRef = useRef(null);
    const [audioSrc, setAudioSrc] = useState("");


    let getAudio = async () => {
        const urlNext = `http://local.api.brickmmo.com:7777/radio/next/${CityID}`;
        let resNext = await fetch(urlNext);
        let data_audio = await resNext.json();
        console.log("audio data: ",data_audio);
        setLogID(data_audio.log.id);
        setScheduleID(data_audio.log.schedule_id);
    };

    useEffect(() => {
        getAudio();
    }, [CityID]);

    useEffect(() => {
        console.log(LogID);
        if (LogID) {
            const urlAudio = `http://local.api.brickmmo.com:7777/radio_queue/${LogID}.mp3`;
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
            // console.log("Audio ended");
            getAudio();
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