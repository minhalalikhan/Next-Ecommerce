// store/slices/counterSlice.ts
import { CartItem, CartState, product } from '@/Customtypes';
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

// Define a type for the slice state


// Define the initial state using that type
const initialState: CartState = {
    Total_count: 0,
    Items: [],
    subtotal: 0

};

const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        Additem: (state, action: PayloadAction<CartItem>) => {
            // state.Total_count += action.payload.count;;


            const AddedItem = action.payload.product
            let AddedCount = action.payload.count

            // check if not already present
            const check = state.Items.find((item) => item.product.productID === AddedItem.productID)


            if (!check) {
                if (AddedItem.quantityInStock < AddedCount)
                    AddedCount = AddedItem.quantityInStock
                state.Items = [...state.Items, { product: AddedItem, count: AddedCount }]
            }
            else {
                //  ensure that cart Quantity does not exceed available quanity
                if (AddedItem.quantityInStock < AddedCount + check.count)
                    AddedCount = AddedItem.quantityInStock - check.count
            }


            //Add to subtotal
            state.subtotal = state.subtotal + (AddedItem.price * AddedCount)
            // Add to total count
            state.Total_count = state.Total_count + AddedCount

        },
        RemoveItem: (state, action: PayloadAction<CartItem>) => {
            // state.Total_count -= action.payload.count;;
            // find item and remove it
            //  decrement the count of total 
            let removedItem = state.Items.find((item) => item.product.productID === action.payload.product.productID)
            if (removedItem) {
                // if remove count is equal to current cart count or more than it-> completely remove item
                if (removedItem.count <= action.payload.count) {
                    // remove it from list
                    action.payload.count = removedItem.count
                    state.Items = state.Items.filter((item) => item.product.productID !== action.payload.product.productID)
                }
                //remove from subtotal
                state.subtotal = state.subtotal - (action.payload.count * removedItem?.product.price)
                // remove from total count
                state.Total_count = state.Total_count - action.payload.count
            }
        },
        UpdateQuantity: (state, action: PayloadAction<CartItem>) => {


            const CurrentItem = state.Items.find((item) => item.product.productID === action.payload.product.productID)


            state.Total_count += action.payload.count;
            state.Items = []
            state.subtotal = state.subtotal
        },




    },
});

export const isAddedToCart = createSelector(
    (state) => state.Cart.Items,
    (state, productId) => productId,
    (items, productId) => items.some((item: any) => item.productID === productId)
);

export const { Additem, RemoveItem, UpdateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
