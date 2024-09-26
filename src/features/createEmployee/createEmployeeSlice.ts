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
            const newEmployee = action.payload;
            console.log(newEmployee);
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
