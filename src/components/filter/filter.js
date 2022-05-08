import FeaturesFilter from "../features-filter/features-filter";
import FilterTitle from "../filter-title/filter-title";
import "./filter.scss";

const Filter = () => {
    return (
    <div className="filter">
    <FilterTitle />
    <FeaturesFilter />
    </div>
    );
}

export default Filter;