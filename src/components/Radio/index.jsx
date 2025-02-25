import "./style.css";

export default function Radio({min,host,type,className}) {
    return(
  <>
    <div
      className={`row radioName ${className} py-0` }
    >
        <h4 className="col-1 fs-6 min m-0">{min}</h4>
        <div className="col-7 title-container">
        <h3 className="title fs-6 text-start">{type}</h3>
        </div>
        <p className="col-4 p-0 my-0 host">{host}</p>
      </div>
  </>
  );
}
