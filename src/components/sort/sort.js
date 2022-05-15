
import { useState } from "react";
import "./sort.scss";
const Sort = () => {

const [ sortOpen, setSortOpen ] = useState(false);

const handleBtnClick = () => {
    setSortOpen(true)
}



    return (
    <>
    <button className={`sort__btn ${sortOpen ? "sort__btn--opened" : ""}`} onClick={handleBtnClick}>Sort by : Most Upvotes</button>
    <ul className={`sort__list ${sortOpen ? "sort__list--opened" : ""}`} >
    <li className="sort__item sort__item--active">
    <p className="sort__item-desc">Most Upvotes</p>
    </li>
    <li className="sort__item">
    <p className="sort__item-desc">Least Upvotes</p>
    </li>
    <li className="sort__item">
    <p className="sort__item-desc">Most Comments</p>
    </li>
    <li className="sort__item">
    <p className="sort__item-desc">Least Comments</p>
    </li>
    </ul>
    </>
    );
}

export default Sort;