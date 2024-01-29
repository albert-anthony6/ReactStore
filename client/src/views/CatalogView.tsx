import { useEffect } from 'react';
import ProductList from "../components/ProductList"
import LoadingComponent from '../components/LoadingComponent';
import { useAppDispatch, useAppSelector } from '../store/configureStore';
import { fetchProductsAsync, productSelectors } from '../store/reducers/catalogSlice';

export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const { productsLoaded, status } = useAppSelector((state) => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch]);

    if (status.includes("pending")) return <LoadingComponent message="Loading Products..." />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}