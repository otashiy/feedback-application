import { Route, Routes } from "react-router-dom";
import Feedback from "./screens/feedback/feedback";
import Main from "./screens/main/main";
import Edit from "./screens/edit/edit";
import AddFeedback from "./screens/add-feedback/add-feedback";
import "./assets/sass/main.scss";
import ProductsProvider from "./context/product-context";





function App() {
  return (
  <>
  <ProductsProvider>
   <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/feedback/:id" element={<Feedback />} />
    <Route path="/add-feedback" element={<AddFeedback />} />
    <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  </ProductsProvider>
  </>
  );
}

export default App;
