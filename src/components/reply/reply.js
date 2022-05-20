import Button from "../button/button";
import "./reply.scss";

const Reply = ({ className, width="594px" }) => {
    return (
   <label style={{width}} className={`label ` + className}>
     <input className="label__input" type="text" name="text" placeholder="Type your replies"/>
    <Button className="label__btn">Post reply</Button>
   </label>
    );
}

export default Reply;