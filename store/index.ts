

// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './Features/CartSlice';
import ProductsReducer from './Features/ProductsSlice';

// Create the store
const store = configureStore({
    reducer: {
        Cart: CartReducer,
        Products: ProductsReducer,
    },
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// export const Cart = {
//     TotalCount: 0,
//     Items: []
// };
