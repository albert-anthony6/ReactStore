import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Basket } from "../utils/interfaces/Basket";

interface StoreContextValue {
    basket: Basket | null;
    setBasket: (basket: Basket) => void;
    removeItem: (productId: number, quantity: number) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useStoreContext() {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw Error("Oops - we do not seem to be inside the provider");
    }

    return context;
}

export function StoreProvider({children}: PropsWithChildren) {
    const [basket, setBasket] = useState<Basket | null>(null);

    function removeItem(productId: number, quantity: number) {
        if (!basket) return;
        const items = [...basket.items];
        const itemIdex = items.findIndex((item) => item.productId === productId);
        if (itemIdex >= 0) {
            items[itemIdex].quantity -= quantity;

            if (items[itemIdex].quantity === 0) items.splice(itemIdex, 1);
            setBasket((prevState) => {
                return {...prevState!, items}
            })
        }
    }

    return (
        <StoreContext.Provider value={{basket, setBasket, removeItem}}>
            {children}
        </StoreContext.Provider>
    )
}