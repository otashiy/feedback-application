import "./products.scss";
import { useContext } from "react";
import Feature from "../feature/feature";
import { ProductsContext } from "../../App";
import { Link } from "react-router-dom";


const Products = () => {

const { products } = useContext(ProductsContext);

    return (
<ul className="products__list">
      {products && products.productRequests.map((product) => {
            return (  
                <li className="products__item" key={product.id}>
                <button className="products__item-btn">{product.upvotes}</button>
                <div className="products__item-wrapper">
                <Link to={"/feedback/" + product.id} className="products__item-title">{product.title}</Link>
                <p className="products__item-desc">{product.description}</p>
                <Feature children={product.category} />
                 </div>
                <span className="products__item-text">{product.comments && product.comments.length || 0}</span>
                 </li>
            );
        })}
        </ul>
    );
}

export default Products;