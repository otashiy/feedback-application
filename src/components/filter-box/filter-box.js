
import CategoriesFilter from "../categories-filter/categories-filter";
import MainTitle from "../main-title/main-title";
import RoadMap from "../roadmap/roadmap";
import "./filter-box.scss";

const Filter = () => {
    return (
    <fieldset className="filter-box">
    <MainTitle />
    <CategoriesFilter />
    <RoadMap />
    </fieldset>
    );
}

export default Filter;