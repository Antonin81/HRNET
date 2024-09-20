import { createSlice } from "@reduxjs/toolkit";

interface Employee {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: number;
    };
    department: string;
}

const initialState: Array<Employee> = [];

export const createEmployeeSlice = createSlice({
    name: "createEmployeeSlice",
    initialState: initialState,
    reducers: {
        addEmployee: (currentState, action) => {
            return [...currentState, action.payload];
        },
    },
});
