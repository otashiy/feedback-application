import { Link, useNavigate, useNavigationType } from "react-router-dom";
import "./add-feedback.scss";
import Button from "../../components/button/button";
import { useState } from "react";
import { useProduct } from "../../context/product-context";

const AddFeedback = () => {

const { products, setProducts } = useProduct();

const navigate = useNavigate();
const [ titleValue, setTitle ] = useState();
const [ categoryValue, setCategory ] = useState();
const [ commentValue, setComment ] = useState();

const titleChange = (evt) => {
setTitle(evt.target.value)
};
const categoryChange = (evt) => {
setCategory(evt.target.value)
};
const commentChange = (evt) => {
setComment(evt.target.value)
};
const handleFormSubmit = () => {
setProducts([
    ...products.productRequests,
    {
    id: Math.floor(Math.random * 1000),
    title: titleValue,
    category: categoryValue,
    comments: commentValue
    }
])
}

    return (
   <>
    <div className="add-feedback">
    <button className="add-feedback__btn">+</button>
    <Link className="add-feedback__link" to="/">Go back</Link>
    <form className="add-form" onClick={handleFormSubmit}>
    <h1 className="add-form__title">Create New Feedback</h1>
    <label className="add-form__label" htmlFor="#">
        Feedback Title
        <span className="add-form__span">Add a short, descriptive headline</span>
        <input value={titleValue} onChange={titleChange} className="add-form__input" type="text" required name="text"/>
    </label>
    <div className="add-form__label">
    <span>Category</span>
    <span className="add-form__span">Choose a category for your feedback</span>
    <select onChange={categoryChange} value={categoryValue} className="add-form__select" name="text" id="select">
        <option selected>Feature</option>
        <option>UI</option>
        <option>UX</option>
        <option>ALL</option>
        <option>Enhancment</option>
        <option>Bug</option>
    </select>
    </div>
    <label className="add-form__label" htmlFor="#">
        Feedback detail
        <span className="add-form__span">Include any specific comments on what should be improved, added, etc.</span>
        <textarea value={commentValue} onChange={commentChange} className="add-form__area" type="text" required name="text"/>
    </label>
    <div className="add_form__wrapper">
    <Button className="add-form__cancel-btn">Cancel</Button>
    <button type="submit" onClick={() => navigate("/")}>Add feedback</button>
    </div>
    </form>
    </div>
   </>
    ); 
}

export default AddFeedback;