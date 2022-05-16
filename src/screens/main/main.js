import CategoriesFilter from "../../components/categories-filter/categories-filter";
import Container from "../../components/container/container";
import MainTitle from "../../components/main-title/main-title";
import RoadMap from "../../components/roadmap/roadmap";
import Header from "../../components/header/header";
import Products from "../../components/products/products";
import "./main.scss";



const Main = () => {
    return (
   <>
<main className="main">
<Container className="main__container">
<div className="main__filter">
<MainTitle />
<CategoriesFilter />
<RoadMap />
</div>

<section>
<Header />
<Products />
</section>
</Container>
</main>
   </>
    );
}

export default Main;