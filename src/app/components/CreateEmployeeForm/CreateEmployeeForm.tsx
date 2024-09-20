import formStateSelectData from "../../../common/helpers/formStateSelectData";
import { useAppDispatch } from "../../../common/utils/hooks";
import { createEmployeeSlice } from "../../../features/createEmployee/createEmployeeSlice";
import { modalSlice } from "../../../features/modal/modalSlice";

function CreateEmployeeForm() {
    const dispatch = useAppDispatch();

    function saveEmployee(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const {
            firstName,
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
            firstName &&
            lastname &&
            dateOfBirth &&
            startDate &&
            street &&
            city &&
            state &&
            zipCode &&
            department;
        if (check) {
            dispatch(modalSlice.actions.toggleModal(true));
            dispatch(
                createEmployeeSlice.actions.addEmployee({
                    firstName: firstName.value,
                    lastname: lastname.value,
                    dateOfBirth: dateOfBirth.value,
                    startDate: startDate.value,
                    address: {
                        street: street.value,
                        city: city.value,
                        state: state.value,
                        zipCode: zipCode.value,
                    },
                    department: department.value,
                })
            );
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
            <input type="text" id="first-name" name="firstname" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="lastname" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="date" name="dateOfBirth" />

            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="date" name="startDate" />

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" name="street" />

                <label htmlFor="city">City</label>
                <input id="city" type="text" name="city" />

                <label htmlFor="state">State</label>
                <select name="state" id="state">
                    {formStateSelectData.map((state) => (
                        <option
                            value={state.abbreviation}
                            key={state.abbreviation}
                        >
                            {state.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" name="zipCode" />
            </fieldset>

            <label htmlFor="department">Department</label>
            <select name="department" id="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
            <button type="submit">Save</button>
        </form>
    );
}

export default CreateEmployeeForm;
