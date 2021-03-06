
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/button/button";
import CategoriesSpan from "../../components/categories-span/categories-span";
import Comments from "../../components/comments/comments";
import Container from "../../components/container/container";
import Reply from "../../components/reply/reply";
import { useProduct } from "../../context/product-context";
import "./feedback.scss";

const Feedback = () => {

const { id } = useParams();


const { products } = useProduct();

let currenProduct = products.productRequests.find((product) => {
    return product.id === +id;
})

    return (
    <>
    <main className="feedback-main">
    <Container width="730px" className="container feedback__container">
    <div className="feedback__link-wrapper">
    <Link className="feedback__link-back" to="/">Go back</Link>
    <Link className="feedback__link-edit" to={"/edit/" + currenProduct.id}>Edit feedback</Link>
    </div>
    <article className="feedback__item">
    <button className="feedback__item-btn">{currenProduct.upvotes}</button>
                <div className="feedback__item-wrapper">
                <Link to={"/edit/"} className="feedback__item-title">{currenProduct.title}</Link>
                <p className="feedback__item-desc">{currenProduct.description}</p>
                <CategoriesSpan children={currenProduct.category} />
                 </div>
                <span className="feedback__item-text">{currenProduct.comments && currenProduct.comments.length || 0}</span>
    </article>

    <Comments />
    
 
    <form className="feedback__form">
    <label className="feedback__form-label" htmlFor="#">
    Add Comments
    <input className="feedback__form-input" type="text" name="text" placeholder="Type your comment here" />
    </label>
    <div className="feedback__form-wrapper">
    <span className="feedback__form-spn">225 characters left</span>
    <Button type = "submit" className="feedback__form-btn">Post comments</Button>
    </div>
    </form>
    </Container>
    </main>
    </>
    );
}

export default Feedback;