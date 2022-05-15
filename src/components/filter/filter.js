import Container from "../container/container";
import FeaturesFilter from "../features-filter/features-filter";
import FilterTitle from "../filter-title/filter-title";
import RoadMap from "../roadmap/roadmap";
import "./filter.scss";

const Filter = () => {
    return (
    <div className="filter">
    <FilterTitle />
    <FeaturesFilter />
    <RoadMap />
    </div>
    );
}

export default Filter;