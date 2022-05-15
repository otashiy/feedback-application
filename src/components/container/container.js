
import "./container.scss";
import Filter from "../../components/filter/filter"
import Products from "../products/products"
import Header from "../header/header"

const Container = () => {
    return (
    <div className="container">
    <Filter />
    <div className="container__wrapper">
    <Header />
    <Products />
    </div>
    </div>
    );
}

export default Container;