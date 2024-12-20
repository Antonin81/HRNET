import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;
export const modalSlice = createSlice({
    name: "modalSlice",
    initialState: initialState,
    reducers: {
        toggleModal: (_, action) => {
            return action.payload;
        },
    },
});
