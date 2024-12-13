import { TableHTMLAttributes, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../common/utils/hooks";
import { createEmployeeSlice } from "../../../features/createEmployee/createEmployeeSlice";
import { DataTable } from "@antonin-oc/react-data-table";
import { tableHeading } from "../../../common/utils/types";

function EmployeesPage() {
    const dispatch = useAppDispatch();
    const employees = useAppSelector(
        (state) => state.employees as Record<string, any>[]
    );
    const headings: tableHeading[] = [
        { title: "First Name", data: "firstName" },
        { title: "Last Name", data: "lastName" },
        { title: "Start Date", data: "startDate" },
        { title: "Department", data: "department" },
        { title: "Date of Birth", data: "dateOfBirth" },
        { title: "Street", data: "street" },
        { title: "City", data: "city" },
        { title: "State", data: "state" },
    ];
    const attributes: TableHTMLAttributes<any> = {
        id: "table-employees",
        className: "data-table-classic",
    };

    useEffect(() => {
        dispatch(createEmployeeSlice.actions.storeEmployeesFromLocalStorage());
    }, [dispatch]);
    return (
        <main>
            <div className="title">
                <h1>HRnet</h1>
                <a className="page-link" href="/">
                    Home
                </a>
            </div>
            {employees && employees.length !== 0 ? (
                <DataTable
                    attributes={attributes}
                    data={employees}
                    headings={headings}
                />
            ) : (
                <p>Loading employees...</p>
            )}
        </main>
    );
}

export default EmployeesPage;
