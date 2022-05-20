import { createContext, useContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [ products, setProducts ] = useState(null);
    const [ isFetched, setFetched ] = useState(false);

    useEffect(() => {
    if (!isFetched) {
        setFetched(true);
        fetch(`/data.json`)
        .then(response => response.json())
        .then(data => {
            setProducts({
            ...data,
            productRequests: data.productRequests.map(product => ({
            ...product,
            isLiked: false
            }))
            })
        })
    }
    }, [isFetched]);
    
    if (!products) {
    return null
    };

    return (
    <ProductsContext.Provider value={{products, setProducts}}>
    {children}
    </ProductsContext.Provider>
    );
}
export const useProduct = () => {
    return useContext(ProductsContext);
}

export default ProductsProvider;