import { Link, useParams } from "react-router-dom";
import Button from "../button/button";
import img from "../../assets/images/site-logo.svg";
import "./header.scss";
import Sort from "../sort/sort";
import { useContext } from "react";
import { ProductsContext } from "../../App";


const Header = () => {
    
const { products } = useContext(ProductsContext);


    return (
    <header className="header">
            <Link className="header__link" to="/">
                <img className="heaeder__img" src={img} alt="site-logo" width="23" height="24" />
            </Link>
            <span className="header__span">10 Suggestions</span>
                <Sort />
                <Button to="/feedback/:id" className="header__btn">+ Add Feedback</Button>
    </header>
    );
}

export default Header;