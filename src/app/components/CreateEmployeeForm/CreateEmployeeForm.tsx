import { useEffect } from "react";
import formDepartmentSelectData from "../../../common/helpers/formDepartmentSelectData";
import formStateSelectData from "../../../common/helpers/formStateSelectData";
import { useAppDispatch } from "../../../common/utils/hooks";
import { createEmployeeSlice } from "../../../features/createEmployee/createEmployeeSlice";
import { modalSlice } from "../../../features/modal/modalSlice";
import InputDate from "../InputDate/InputDate";
import InputSelect from "../InputSelect/InputSelect";

function CreateEmployeeForm() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(createEmployeeSlice.actions.storeEmployeesFromLocalStorage());
    }, []);

    function diffYears(date1: Date, date2: Date) {
        let diffYears = date2.getFullYear() - date1.getFullYear();
        if (
            date2.getMonth() < date1.getMonth() ||
            (date2.getMonth() === date1.getMonth() &&
                date2.getDate() < date1.getDate())
        ) {
            diffYears--;
        }
        return diffYears;
    }

    function testDates(givenDate1: string, givenDate2: string) {
        let date1 = new Date(givenDate1);
        let date2 = new Date(givenDate2);
        let today = new Date();

        return (
            date1 < date2 &&
            diffYears(date1, date2) > 16 &&
            date1 < today &&
            diffYears(date1, today) > 16
        );
    }

    function saveEmployee(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const {
            firstname,
            lastname,
            dateOfBirth,
            startDate,
            street,
            city,
            state,
            zipCode,
            department,
        } = e.currentTarget;
        const check =
            firstname &&
            lastname &&
            dateOfBirth &&
            startDate &&
            street &&
            city &&
            state &&
            zipCode &&
            department &&
            firstname.value &&
            lastname.value &&
            dateOfBirth.value &&
            startDate.value &&
            street.value &&
            city.value &&
            state.value &&
            zipCode.value &&
            department.value &&
            testDates(dateOfBirth.value, startDate.value);
        if (check) {
            dispatch(modalSlice.actions.toggleModal(true));
            dispatch(
                createEmployeeSlice.actions.addEmployee({
                    firstName: firstname.value,
                    lastName: lastname.value,
                    dateOfBirth: dateOfBirth.value,
                    startDate: startDate.value,
                    street: street.value,
                    city: city.value,
                    state: state.value,
                    zipCode: zipCode.value,
                    department: department.value,
                })
            );
            e.currentTarget.reset();
        }
    }

    return (
        <form
            action="#"
            id="create-employee"
            onSubmit={(e) => {
                saveEmployee(e);
            }}
        >
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="firstname" required />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="lastname" required />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <InputDate
                id="date-of-birth"
                name="dateOfBirth"
                isRequired={true}
            />

            <label htmlFor="start-date">Start Date</label>
            <InputDate id="start-date" name="startDate" isRequired={true} />

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" name="street" required />

                <label htmlFor="city">City</label>
                <input id="city" type="text" name="city" required />

                <label htmlFor="state">State</label>
                <InputSelect
                    name={undefined}
                    id="state"
                    options={formStateSelectData}
                />

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" name="zipCode" required />
            </fieldset>

            <label htmlFor="department">Department</label>
            <InputSelect
                name={undefined}
                id="department"
                options={formDepartmentSelectData}
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default CreateEmployeeForm;
