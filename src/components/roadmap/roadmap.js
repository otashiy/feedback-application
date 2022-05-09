import { Link } from "react-router-dom";
import "./roadmap.scss";

const RoadMap = () => {
    return (
        <div className="roadmap">
        <h2 className="roadmap__title">Roadmap</h2>
        <Link to="#" className="roadmap__link">View</Link>
        </div>
    );
}

export default RoadMap;