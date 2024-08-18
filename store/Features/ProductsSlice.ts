// store/slices/counterSlice.ts
import { getPages, getTotalPages } from '@/lib/backend';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ProductsState {
    ActiveCategory: string;
    page: number,
    TotalPages: number
}



// Define the initial state using that type
const initialState: ProductsState = {
    ActiveCategory: '',
    page: 1,
    TotalPages: getTotalPages()
};

const ProductsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        NextPage: (state) => {
            // state.Total_count += action.payload.count;;
            if (state.TotalPages > state.page) {
                state.page += 1
            }

        },
        PreviousPage: (state) => {
            if (state.page > 1) {
                state.page -= 1
            }
        },
        ChangeCategory: (state, action: PayloadAction<string>) => {
            state.ActiveCategory = action.payload
            state.page = 1
            state.TotalPages = getPages(action.payload)
        },
    },
});

export const { NextPage, PreviousPage, ChangeCategory } = ProductsSlice.actions;
export default ProductsSlice.reducer;
