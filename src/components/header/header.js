import { Link, useParams } from "react-router-dom";
import Button from "../button/button";
import img from "../../assets/images/site-logo.svg";
import "./header.scss";
import Sort from "../sort/sort";
import { useState } from "react";
import { useProduct } from "../../context/product-context";

const sortOptions = [
{
text: "Most upvotes",
value: "1"
},
{
text: "Least upvotes",
value: "2"
},
{
text: "Most comments",
value: "3"
},
{
text: "Least comments",
value: "4"
}
]


const Header = () => {
    
const [ sortValue, setSortValue ] = useState("1");
const [ isSortOpen, setSortOpen ] = useState(false);
const { setProducts } = useProduct();

const handleSortClick = () => {
setSortOpen((isSortOpen) => {
    return !isSortOpen;
});
}

const handleOptionChange = (evt) => {
    const sortValue = evt.target.value;

    setSortOpen(false);
    setSortValue(sortValue);

    setProducts((product) => {
      return {
        ...product,
        productRequests: product.productRequests.sort((a, b) => {
          switch (sortValue) {
            case "1":
              return b.upvotes - a.upvotes;
            case "2":
              return a.upvotes - b.upvotes;  
            case "3": 
              return b.comments?.length - a.comments?.length  
            case "4": 
              return (a.comments?.length || 0) - (b.comments?.length || 0)  
            default:
              return 0
          }
        })
      }
    });
  }

    return (
    <header className="header">
            <Link className="header__link" to="/">
                <img className="heaeder__img" src={img} alt="site-logo" width="23" height="24" />
            </Link>
          <div className="header__wrapper">
          <Button className="header__sort-btn" onClick={handleSortClick}>Sort by: {sortOptions.find(option => option.value === sortValue).text}</Button>

            <Sort options={sortOptions} name="sort"  defaultValue={sortValue} width="255px" isOpen={isSortOpen} onChange={handleOptionChange} />
          </div>
            <Button to="/feedback/:id" className="header__btn">+ Add Feedback</Button>
    </header>
    );
}

export default Header;