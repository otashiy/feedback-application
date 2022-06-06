

import "./sort.scss";
const Sort = ({ width= "300px", options, name, defaultValue, isOpen, onChange }) => {
   
    return (
        <ul style={{width}} onChange={onChange} className={`sort ${isOpen ? "sort--opened" : ""}`}>
       {options.map(option => (
         <li key={option.value} className="sort__item">
         <label className="sort__label">
         <input defaultValue={option.value} defaultChecked={defaultValue === option.value} className="sort__input visually-hidden" type="radio" name={name} />
         {option.text}
         <span className="sort__item-tick"></span>
         </label>
     </li>
       ))}
        </ul>
    );
}

export default Sort;