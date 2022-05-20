import "./roadmap-form.scss";
import RoadMapRadio from "../roadmap-radio/roadmap-radio";


const RoadMapForm = () => {

    return (
        <form className="roadmap-form">
        <RoadMapRadio className="roadmap-form__label roadmap-form__label roadmap-form__label--planed" children="Planed"/>
        <RoadMapRadio className="roadmap-form__label roadmap-form__label roadmap-form__label--progress" children="In-progress"/>
        <RoadMapRadio className="roadmap-form__label roadmap-form__label roadmap-form__label--live" children="Live"/>
        <RoadMapRadio className="roadmap-form__label roadmap-form__label roadmap-form__label--suggestions" children="Suggestions"/>
        </form>
    );
}

export default RoadMapForm;