
import FeedbackLinks from "../../components/feedback-links/feedback-links"
import FeedbackList from "../../components/feedback-list/feedback-list";
import "./feedback.scss";

const Feedback = () => {
    return (
    <>
    <main>
    <div className="container feedback__container">
    <FeedbackLinks />
    <FeedbackList />
    </div>
    </main>
    </>
    );
}

export default Feedback;