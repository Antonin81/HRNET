import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../common/utils/hooks";
import { createEmployeeSlice } from "../../../features/createEmployee/createEmployeeSlice";
import { DataTable } from "@antonin-oc/react-data-table";
import {
    attributesTestAll,
    dataTest,
    headings,
} from "../../../common/utils/dataTest";

function EmployeesPage() {
    const dispatch = useAppDispatch();
    const employees = useAppSelector((state) => state.employees);
    useEffect(() => {
        dispatch(createEmployeeSlice.actions.storeEmployeesFromLocalStorage());
    }, []);

    return (
        <>
            <a href="/">Home</a>
            {employees &&
                employees.map((employee) => {
                    return (
                        <>
                            <p>{employee.firstName}</p>
                            <p>{employee.lastName}</p>
                            <p>{employee.dateOfBirth}</p>
                            <p>{employee.startDate}</p>
                            <p>{employee.department}</p>
                            <p>{employee.street}</p>
                            <p>{employee.city}</p>
                            <p>{employee.state}</p>
                            <p>{employee.street}</p>
                        </>
                    );
                })}{" "}
            <DataTable
                attributes={attributesTestAll}
                data={dataTest}
                headings={headings}
            />
        </>
    );
}

export default EmployeesPage;
