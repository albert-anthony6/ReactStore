import { useState, useEffect } from 'react';
import { Product } from "../utils/interfaces/product"
import ProductList from "../components/ProductList"

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/Products')
        .then((resp) => resp.json())
        .then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <>
            <ProductList products={products} />
        </>
    )
}