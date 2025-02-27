import "./style.css"
// import { useContext } from "react";
// import { CityContext } from "../Context/CityContext";

export default function City() {
  //     const { CityID,setCityID } = useContext(CityContext);

  // const getCityValue = (e) => {

  //   let cityValue = e.target.value;
  //   if(cityValue === "smart_city"){
  //     setCityID(1);
  //   }else if(cityValue === "sec_city"){
  //     setCityID(2);
  //   }
  // }

  return (
    <>
    <h2 className="city">Smart City</h2>
      {/* <form>
        <select 
          name="city" 
          id="city" 
          className="city shadow p-1"
          value={CityID === 1 ? "smart_city" : "sec_city"} 
          onChange={getCityValue}>
          <option value="smart_city" className="optionCity">
            Smart City
          </option>
          <option value="sec_city" className="optionCity">Second City</option>
        </select>
      </form> */}
    </>
  );
}
