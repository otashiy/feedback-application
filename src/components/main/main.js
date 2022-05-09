import AddList from "../add-list/add-list";
import Header from "../header/header";
import "./main.scss";

const Main = () => {
    return (
       <>
       <div className="main">
        <Header className="container" />
        <AddList />
       </div>
       </>
    );
}

export default Main;