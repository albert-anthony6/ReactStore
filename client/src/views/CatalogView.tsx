import { useState, useEffect } from 'react';
import { Product } from "../utils/interfaces/product"
import ProductList from "../components/ProductList"
import agent from '../api/agent';
import LoadingComponent from '../components/LoadingComponent';

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list()
            .then((products) => setProducts(products))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <LoadingComponent message="Loading Products..." />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}