
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../App";
import RoadMapDesc from "../roadmap-desc/roadmap-desc";
import "./roadmap-radio.scss";
const RoadMapRadio = ({ className= "", children }) => {

const [ count, setCount ] = useState({planed: 0, inProgress: 0, live: 0, sugesstions: 0})

const { products } = useContext(ProductsContext);

useEffect(() => {

const countedCounts = {
    ...count
}

})

    return (
   <>
    <div className="roadmap-content">
   <label className={"roadmap-label" + className}>
        <input name="radio" type="radio" required className="roadmap-label__input visually-hidden" />
        <RoadMapDesc className="roadmap-desc roadmap-label__desc" children={children} />
        </label>
        <span className="roadmap-label__span">0</span>
    </div>
   </>
    );
}

export default RoadMapRadio;