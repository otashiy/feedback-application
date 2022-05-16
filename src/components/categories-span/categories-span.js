import "./categories-span.scss";
const CategoriesSpan = ({ className = "", children }) => {
    return (
    <span className={"categories-span " + className}>{children}</span>
    );
}

export default CategoriesSpan;