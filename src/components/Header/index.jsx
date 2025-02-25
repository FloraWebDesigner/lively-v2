import { useState } from "react"
import RadioLogID from "../RadioLogID"
import "./style.css"

export default function Header({isPlaying}) {

    return <>
    <section className="logo d-flex flex-row align-items-center my-0">
    <div className="d-flex flex-column align-items-center">
    <div className="img-container" style={{ maxWidth: "100%" }}></div>
    <h3 className="brickmmo py-0 my-0">Brick<span>MMO</span></h3>
</div>
    {/* <img src="./img/BrickMMO_Logo_Coloured.png" alt="BrickMMO Logo" style={{width:"12rem"}}/> */}
    <h1 className="twoLogo fw-bold">X</h1>
    {/* <img src="./img/Lively_Radio_Station_Logo.png" alt="Lively Radio Logo" style={{width:"12rem", maxWidth: "100%"}}/> */}
    <div className={`logo-container mt-5 ${isPlaying ? "playing" : ""}`} style={{width:"12rem", maxWidth:"100%"}}>
        <h1 className="radio-heading radio-logo">
            Livel
            <div className="radio-heading-lg">
                Radio
            </div>
        </h1>
        <p className="radio-logo station pt-0 mt-0">station</p>
        </div>
    </section> 
    </>
}