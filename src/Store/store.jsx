import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./CartSlice";
import favoritesSlice from "./favoritesSlice";


const store = configureStore({
    reducer:{
        cart : Cartslice,
        favorites : favoritesSlice,
    }
})
export default store;




// let persistConfig = {
//     key : "root",
//     storage,
// }
// let rootReducer = combineReducers({
//     cart : Cartslice,
//     favorites : favoritesSlice,
// });

// let persistedReducer = persistReducer(persistConfig,rootReducer)




