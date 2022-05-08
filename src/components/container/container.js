
import Filter from "../filter/filter";
import Header from "../header/header";
import "./container.scss";
const Container = ({ className }) => {
    return (
    <div className={className}>
    <Header className="container" />
    <Filter />
    </div>
    );
}

export default Container;