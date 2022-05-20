import "./products.scss";
import { Link } from "react-router-dom";
import CategoriesSpan from "../categories-span/categories-span";
import { useProduct } from "../../context/product-context";


const Products = () => {

const { products } = useProduct();

    return (
    <ul className="products__list">
      {products && products.productRequests.map((product) => {
            return (  
                <article className="products__item" key={product.id}>
                <button className="products__item-btn">{product.upvotes}</button>
                <div className="products__item-wrapper">
                <Link to={"/feedback/" + product.id} className="products__item-title">{product.title}</Link>
                <p className="products__item-desc">{product.description}</p>
                <CategoriesSpan children={product.category} />
                 </div>
                <span className="products__item-text">{product.comments && product.comments.length || 0}</span>
                 </article>
            );
        })}
        </ul>
    );
}

export default Products;