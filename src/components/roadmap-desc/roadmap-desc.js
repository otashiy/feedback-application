import "./roadmap-desc.scss";

const RoadMapDesc = ({ className="", children}) => {
    return (
        <p className={"roadmap-desc" + className}>{children}</p>
    )
}

export default RoadMapDesc;