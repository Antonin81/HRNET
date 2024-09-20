import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "../features/modal/modalSlice";
import { createEmployeeSlice } from "../features/createEmployee/createEmployeeSlice";

export const store = configureStore({
    reducer: combineReducers({
        isModalOpen: modalSlice.reducer,
        employees: createEmployeeSlice.reducer,
    }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
