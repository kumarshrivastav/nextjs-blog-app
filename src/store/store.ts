import {configureStore,combineReducers} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import {persistReducer,persistStore} from "redux-persist"
import themeReducer from "./themeSlice"

const rootReducers=combineReducers({themeReducer})
const persistedReducers=persistReducer({key:'root',storage},rootReducers)
export const store=configureStore({
    reducer:persistedReducers
})

// export default store
export const persistor=persistStore(store)