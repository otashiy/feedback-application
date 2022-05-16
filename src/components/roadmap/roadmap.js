import { Link } from "react-router-dom";
import RoadMapForm from "../roadmap-form/roadmap-form";
import "./roadmap.scss";

const RoadMap = () => {
    return (
        <fieldset className="roadmap">
        <div className="roadmap__wrapper">
        <h2 className="roadmap__title">Roadmap</h2>
        <Link to="#" className="roadmap__link">View</Link>
        </div>
        <RoadMapForm />
        </fieldset>
    );
}

export default RoadMap;