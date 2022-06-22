import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/product-context";
import Reply from "../reply/reply";
import "./comments.scss";

const Comments = () => {

    const { id } = useParams();


    const { products } = useProduct();
    
    let currenProduct = products.productRequests.find((product) => {
        return product.id === +id;
    })

    const [ isReplyOpen, setReplyOpen ] = useState(false);

    const handleRepClick = () => {
    setReplyOpen((isReplyOpen) => {
        return !isReplyOpen;
    })
    }
    return (
        <div className="feedback__comments">
        <span className="feedback__comments-subtitle">{currenProduct.comments && currenProduct.comments.length || 0} Comments</span>
        {currenProduct.comments?.map(comment => {
            return (
            <article className="feedback__comments-item" key={comment.id}>
            <img src={comment.user.image} alt="user-image" width="40" height="40"/>
            <div className="feedback__comments-content">
            <h2 className="feedback__comments-title">{comment.user.name}</h2>
            <p className="feedback__comments-username">@{comment.user.username}</p>
            <p className="feedback__comments-text">{comment.content}</p>
            <Reply className={`feedback__comments-label ${isReplyOpen ? "feedback__comments-label--opened" : ""}`} width="530px" />
            </div>
            <button onClick={handleRepClick} className="feedback__comments-btn">Reply</button>
            </article>
            );
        })}
        </div>
    );
}

export default Comments;