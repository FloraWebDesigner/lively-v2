import "./style.css"

export default function Header() {
    return <>
    <section className="logo d-flex flex-row align-items-center my-0" style={{columnGap:"2rem"}}>
    <img src="./img/BrickMMO_Logo_Coloured.png" alt="BrickMMO Logo" style={{width:"12rem"}}/>
    <h1 className="twoLogo fw-bold">X</h1>
    <img src="./img/Lively_Radio_Station_Logo.png" alt="Lively Radio Logo" style={{width:"12rem"}}/>
    </section> 
    </>
}