import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../views/HomeView";
import CatalogView from "../views/CatalogView";
import ProductDetails from "../views/ProductDetails";
import AboutView from "../views/AboutView";
import ContactView from "../views/ContactView";
import ServerError from "../components/ServerError";
import BasketView from "../views/BasketView";
import CheckoutView from "../views/CheckoutView";
import NotFound from "../views/NotFound";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegsiterView";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth />, children: [
                {path: 'checkout', element: <CheckoutView />},
            ]},
            {path: '', element: <HomeView />},
            {path: 'catalog', element: <CatalogView />},
            {path: 'catalog/:id', element: <ProductDetails />},
            {path: 'about', element: <AboutView />},
            {path: 'contact', element: <ContactView />},
            {path: 'server-error', element: <ServerError />},
            {path: 'basket', element: <BasketView />},
            {path: 'login', element: <LoginView />},
            {path: 'register', element: <RegisterView />},
            {path: 'not-found', element: <NotFound />},
            {path: '*', element: <Navigate replace to="/not-found" />},
        ]
    }
])