import Main from "../main/main";
import Filter from "../filter/filter";

import "./container.scss";
const Container = ({ className }) => {
    return (
    <div className={className}>
    <Main />
    <Filter />
    </div>
    );
}

export default Container;