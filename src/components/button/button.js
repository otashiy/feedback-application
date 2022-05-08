import { Link } from "react-router-dom";
import "../button/button.scss";

const ElBtn = (props) => <button {...props}></button>
const Button = ({ to, className, ...props }) => {
    const Component = to ? Link : ElBtn;
    return (
    <Component to={to} className={"button " + className} {...props} />
    );
}

export default Button;