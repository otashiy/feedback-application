
import { useMemo } from "react";
import { useProduct } from "../../context/product-context";
import RoadMapDesc from "../roadmap-desc/roadmap-desc";
import "./roadmap-radio.scss";
const RoadMapRadio = ({ className= "", children }) => {

const { products } = useProduct();

const counts = useMemo(() => {
    return (
    products&&products.productRequests.reduce((accumlator, product) => {
    switch (product.status) {
        case "suggestion":
        accumlator.suggestion++
        return accumlator;
        case "planned":
        accumlator.planed++
        return accumlator;
        case "live":
        accumlator.live++
        return accumlator;
        case "in-progress":
        accumlator.inProgress++
        return accumlator;
    }
    },{
        suggestion: 0,
        planned: 0,
        inProgress: 0,
        live: 0
    })
    )
},[products]);


    return (
   <>
    <div className="roadmap-content">
   <label className={"roadmap-label" + className}>
        <input name="radio" type="radio" required className="roadmap-label__input visually-hidden" />
        <RoadMapDesc className="roadmap-desc roadmap-label__desc" children={children} />
        </label>
        <div className="roadmap-label__wrapper">
        <span className="roadmap-label__span">Suggestion: {counts?.suggestion}</span>
        <span className="roadmap-label__span">Planned: {counts?.planned}</span>
        <span className="roadmap-label__span">In-progress: {counts?.inProgress}</span>
        <span className="roadmap-label__span">Live: {counts?.live}</span>
        </div>
    </div>
   </>
    );
}

export default RoadMapRadio;