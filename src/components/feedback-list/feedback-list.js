import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import "./feedback-list.scss";

const FeedbackList = () => {

const { id } = useParams;

const { products } = useContext(ProductsContext);

console.log(products);

    return (
    <ul className="feedback-list">
    
    </ul>
    );
}

export default FeedbackList;