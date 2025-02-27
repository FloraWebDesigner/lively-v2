import { useEffect, useState } from "react";
import Radio from "../Radio";
import { useContext } from "react";
import { ScheduleContext } from "../Context/ScheduleContext";
import { CityContext } from "../Context/CityContext";
import "./style.css";

export default function RadioList() {
    const { CityID } = useContext(CityContext);
    // console.log(CityID);
    let { ScheduleID } = useContext(ScheduleContext);
    // console.log(ScheduleID);

    // http://local.api.brickmmo.com:7777/radio/schedule/1
    let[schedule, setSchedule] = useState([]);

    useEffect(() => {
        console.log("ScheduleID in RadioList:", ScheduleID);
    }, [ScheduleID]);

    useEffect(()=>{
        const getSchedule = async() =>{
            setSchedule([]);
            console.log(CityID);
            let url_schedule = `http://local.api.brickmmo.com:7777/radio/schedule/${CityID}`;
            let res_schedule = await fetch(url_schedule);
            let data_schedule = await res_schedule.json();

            setSchedule(data_schedule.schedule);
        }
        getSchedule();
    },[]
    // [CityID]
);
       
    
    return (
        <section className="mySchedule">
        <div className="d-flex flex-column">
            <Radio 
            key="99"
            min="Min"
            type="Topic"
            host="Host"
            className="schedule-heading"
            />
             <div className="d-flex flex-column mt-2">
        {schedule.map((s)=>(
            <Radio 
            key={s.id}
            min={s.minute}
            type={s.type_name}
            host={s.host_name}
            className={`radio-item ${String(ScheduleID) === s.id ? "active-schedule" : ""}`}
             />
        ))}
        </div>
        </div>
        </section>
    )
}