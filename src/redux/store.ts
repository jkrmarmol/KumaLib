import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './slices/searchSlice';
import modalReducer from './slices/modalSlice';
import authenticationReducer from './slices/authenticationSlice';
import bookReducer from './slices/bookSlice';
import accountReducer from './slices/accountSlice'

const store = configureStore({
  reducer: {
    account: accountReducer,
    search: searchReducer,
    modal: modalReducer,
    authentication: authenticationReducer,
    book: bookReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;