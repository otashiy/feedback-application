import { Route, Routes } from "react-router-dom";
import Feedback from "./screens/feedback/feedback";
import Main from "./screens/main/main";
import Edit from "./screens/edit/edit";
import AddFeedback from "./screens/add-feedback/add-feedback";
import "./assets/sass/main.scss";
import { createContext, useEffect, useState } from "react";


export const ProductsContext = createContext();

function App() {

const [ products, setProducts ] = useState(null);

useEffect(() => {
fetch(`/data.json`)
.then(response => response.json())
.then(data => setProducts(data))
}, []);

if (!products) {
return null
};

  return (
  <>
  <ProductsContext.Provider value={{products, setProducts}}>
   <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/feedback/:id" element={<Feedback />} />
    <Route path="/add-feedback" element={<AddFeedback />} />
    <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  </ProductsContext.Provider>
  </>
  );
}

export default App;
