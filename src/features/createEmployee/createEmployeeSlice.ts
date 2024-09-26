import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../../common/utils/types";

const initialState: Array<Employee> = [];

export const createEmployeeSlice = createSlice({
    name: "createEmployeeSlice",
    initialState: initialState,
    reducers: {
        addEmployee: (currentState, action) => {
            const newEmployee = action.payload;
            const newList = [...currentState, newEmployee];
            localStorage.setItem("employees", JSON.stringify(newList));
            return [...currentState, newEmployee];
        },
        storeEmployeesFromLocalStorage: () => {
            let employeesList = [];
            if (localStorage.getItem("employees")) {
                employeesList = JSON.parse(localStorage.getItem("employees")!);
            }
            return employeesList;
        },
    },
});
