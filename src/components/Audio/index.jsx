import { useEffect, useRef, useState } from "react";
import "./style.css";
import { useContext } from "react";
import { LogContext } from "../Context/LogContext";

export default function Audio() {
  // http://local.api.brickmmo.com:7777/radio/next/1
  const [audioSrc, setAudioSrc] = useState("");
  const audioRef = useRef(null);
  const { LogID } = useContext(LogContext);



  const radioPlay = () =>{
    if (audioSrc && audioRef.current) {
      audioRef.current.play();
    }
  }

  useEffect(() => {
    if (LogID) {
      const urlAudio = `http://local.api.brickmmo.com:7777/radio_queue/${LogID}.mp3`;
      setAudioSrc(urlAudio);
    }
  }, [LogID]);


  useEffect(() => {
    radioPlay();
  }, [audioSrc]);


  return (
    <>
      <audio ref={audioRef} src={audioSrc} controls className="audio">
        Your browser does not support the audio element.{" "}
      </audio>
    </>
  );
}

//   const { LogID } = useContext(LogContext);
//   const [audioList, setAudioList] = useState([]); 
//   const [currentIndex, setCurrentIndex] = useState(0); 
//   const audioRef = useRef(null);


//   useEffect(() => {
//     let urls = [];
//     for (let i = 1; i <= LogID; i++) {
//       urls.push(`http://local.api.brickmmo.com:7777/radio_queue/${i}.mp3`);
//     }
//     setAudioList(urls);
//   }, [LogID]);


//   const handleEnded = () => {
//     if (currentIndex < audioList.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };


//   useEffect(() => {
//     if (audioRef.current && audioList.length > 0) {
//       audioRef.current.src = audioList[currentIndex];
//       audioRef.current
//         .play();
//     }
//   }, [currentIndex, audioList]);

//   return (
//     <div>
//       <audio
//         ref={audioRef}
//         controls
//         onEnded={handleEnded} 
//         className="audio"
//       >
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// }
