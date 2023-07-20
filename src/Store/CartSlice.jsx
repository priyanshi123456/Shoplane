import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item : [],
    totalprice : 0
};

const cartslice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        add_to_cart(state,action){
            state.item.push({...action.payload , quantity : 1})
            state.totalprice += action.payload.price
        },
        remove_to_cart(state,action){
            state.item = state.item.filter((item)=>item.id !== action.payload.id)
            state.totalprice -= action.payload.price
        },
        increament(state,action){
            const itempresent = state.item.find((item)=>item.id === action.payload.id)
            itempresent.quantity++;
            state.totalprice += action.payload.price
        },
        decreament(state,action){
            const itempresent = state.item.find((item)=>item.id === action.payload.id)
            if(itempresent.quantity > 1 ){
                itempresent.quantity--;
                state.totalprice -= action.payload.price
            }
            

        }
    
    }
})

export const {add_to_cart,remove_to_cart,increament,decreament} = cartslice.actions;
export default cartslice.reducer;