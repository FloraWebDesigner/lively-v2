import "./style.css"

export default function City() {
  return (
    <>
      <form>
        <select name="city" id="city" className="city shadow p-1">
          <option defaultValue="smart_city" className="optionCity">
            Smart City
          </option>
          <option value="sec_city" className="optionCity">Second City</option>
        </select>
      </form>
    </>
  );
}
