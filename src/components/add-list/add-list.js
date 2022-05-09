import "./add-list.scss";
import Feature from "../feature/feature";

const AddList = () => {
    return (
        <ul className="add-list__list">
            <li className="add-list__item">
                <button className="add-list__item-btn">112</button>
            <div className="add-list__item-wrapper">
                <h3 className="add-list__item-title">Add tags for solutions</h3>
                <p className="add-list__item-desc">Easier to search for solutions based on a specific stack.</p>
                <Feature children="Enhancement" />
            </div>
            </li>
            <li className="add-list__item">
                <button className="add-list__item-btn">99</button>
            <div className="add-list__item-wrapper">
                <h3 className="add-list__item-title">Add a dark theme option</h3>
                <p className="add-list__item-desc">It would help people with light sensitivities and who prefer dark mode.</p>
                <Feature children="Enhancement" />
            </div>
            </li>
            <li className="add-list__item">
                <button className="add-list__item-btn">65</button>
            <div className="add-list__item-wrapper">
                <h3 className="add-list__item-title">Q&A within the challenge hubs</h3>
                <p className="add-list__item-desc">Challenge-specific Q&A would make for easy reference.</p>
                <Feature children="Enhancement" />
            </div>
            </li>
            <li className="add-list__item">
                <button className="add-list__item-btn">52</button>
            <div className="add-list__item-wrapper">
                <h3 className="add-list__item-title">Allow image/video upload </h3>
                <p className="add-list__item-desc">Images and screencasts can enhance comments on solutions.</p>
                <Feature children="Enhancement" />
            </div>
            </li>
            <li className="add-list__item">
                <button className="add-list__item-btn">42</button>
            <div className="add-list__item-wrapper">
                <h3 className="add-list__item-title">Add tags for solutions</h3>
                <p className="add-list__item-desc">Easier to search for solutions based on a specific stack.</p>
                <Feature children="Enhancement" />
            </div>
            </li>
            <li className="add-list__item">
                <button className="add-list__item-btn">3</button>
            <div className="add-list__item-wrapper">
                <h3 className="add-list__item-title">Add tags for solutions</h3>
                <p className="add-list__item-desc">Easier to search for solutions based on a specific stack.</p>
                <Feature children="Enhancement" />
            </div>
            </li>
        </ul>
    );
}

export default AddList;