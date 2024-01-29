import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { basketSlice } from "./reducers/basketSlice";
import { catalogSlice } from "./reducers/catalogSlice";

// export function configureStore() {
//     return createStore(counterReducer);
// }

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        basket: basketSlice.reducer,
        catalog: catalogSlice.reducer,
    }
});

// Type of the reducer
export type RootState = ReturnType<typeof store.getState>;

// Type of the dispatch
export type AppDispatch = typeof store.dispatch;

// Custom hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
