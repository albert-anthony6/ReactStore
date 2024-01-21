import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../views/HomeView";
import CatalogView from "../views/CatalogView";
import ProductDetails from "../views/ProductDetails";
import AboutView from "../views/AboutView";
import ContactView from "../views/ContactView";
import ServerError from "../components/ServerError";
import NotFound from "../views/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomeView />},
            {path: 'catalog', element: <CatalogView />},
            {path: 'catalog/:id', element: <ProductDetails />},
            {path: 'about', element: <AboutView />},
            {path: 'contact', element: <ContactView />},
            {path: 'server-error', element: <ServerError />},
            {path: 'not-found', element: <NotFound />},
            {path: '*', element: <Navigate replace to="/not-found" />},
        ]
    }
])