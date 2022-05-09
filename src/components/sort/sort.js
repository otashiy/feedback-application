import "./sort.scss";
const Sort = () => {
    return (
    <>
    <button className="sort__btn">Sort by : Most Upvotes</button>
    <ul className="sort__list">
    <li className="sort__item">
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