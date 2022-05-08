import Feature from "../feature/feature";
import "./feature-radio.scss";

const FeatureRadio = ({children, className = "", name, ...props}) => {
    return (
    <>
    <label className={"feature-radio " + className}>
    <input name={name} className="feature-radio__input visually-hidden" type="radio" {...props} />
    <Feature className="feature-radio__span" children={children} />
    </label>
    </>
    );
}

export default FeatureRadio;