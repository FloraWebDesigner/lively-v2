import './style.css'

export default function radio(props) {
    return(
        <>
        <div className="d-flex flex-row justify-content-between align-items-center radioName">
        <h2 className="fs-5 min">{props.min}</h2> 
        <h1 className="title fs-5 fw-bolder text-center">{props.type}</h1>         
            <p className="my-0 me-2 fst-italic">{props.host}</p>
            </div>          
        </>
    )
}