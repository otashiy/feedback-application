import { Link } from "react-router-dom";
import Button from "../button/button";
import img from "../../assets/images/site-logo.svg";
import "./header.scss";
import Sort from "../sort/sort";


const Header = ({ className }) => {
    return (
    <header className="header">
    <h1 className="visually-hidden">Product feedback app</h1>
    <Link className="header__link" to="/">
        <img className="heaeder__img" src={img} alt="site-logo" width="23" height="24" />
    </Link>
    <p className="header__description">6 Suggestions</p>
    <Sort />
    <Button to="/feedback/:id" className="header__btn">+ Add Feedback</Button>
  
    </header>
    );
}

export default Header;