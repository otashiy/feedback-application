import { Link, useParams } from "react-router-dom";
import { useProduct } from "../../context/product-context";

const Edit = () => {

const { id } = useParams();
const { products } = useProduct();

const editingProduct = products.productRequests.find((product) => {
    return product.id === id
});

    return  (
   <>
   <Link to="/">To main page</Link>
   </>
    );
}

export default Edit;