import CategoriesSpan from "../categories-span/categories-span";
import "./categories-radio.scss";

const CategoriesRadio = ({children, className = "", name, ...props}) => {
    return (
    <>
    <label className={"categories-radio " + className}>
    <input name={name} className="categories-radio__input visually-hidden" type="radio" {...props} />
    <CategoriesSpan className="categories-radio__span" children={children} />
    </label>
    </>
    );
}

export default CategoriesRadio;