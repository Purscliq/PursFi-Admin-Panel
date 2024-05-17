import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ApiSlice } from "@/services/Api";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([ApiSlice.middleware]),
  });

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];
