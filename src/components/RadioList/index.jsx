import { useEffect, useState } from "react";
import Radio from "../Radio";

export default function RadioList() {
    
    // http://local.api.brickmmo.com:7777/radio/schedule/1

    let[schedule, setSchedule] = useState([]);

    useEffect(()=>{
        const getSchedule = async() =>{
            let url_schedule = "http://local.api.brickmmo.com:7777/radio/schedule/1";
            let res_schedule = await fetch(url_schedule);
            let data_schedule = await res_schedule.json();
            console.log(data_schedule);
            // console.log(data_schedule.schedule);
            // console.log(data_schedule.schedule[0].type_name);
            setSchedule(data_schedule.schedule);
        }
        getSchedule();
    },[]);
       
    
    return (
        <>
        <div className="d-flex flex-column">
        {schedule.map((s)=>(
            <Radio 
            key={s.id}
            min={s.minute}
            type={s.type_name}
            host={s.host_name}
             />
        ))}
        </div>
        </>
    )
}