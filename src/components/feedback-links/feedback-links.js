import "./feedback-links.scss";
import { Link } from "react-router-dom";

const FeedbackLinks = () => {
    return (
      <>
        <Link className="feedback-link" to="/">Go back</Link>
        <Link className="feedback-btn" to="/add-feedback">To add-feedback page</Link>
      </>
    );
}

export default FeedbackLinks;