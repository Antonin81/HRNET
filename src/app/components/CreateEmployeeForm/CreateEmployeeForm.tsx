import { useEffect } from "react";
import formDepartmentSelectData from "../../../common/helpers/formDepartmentSelectData";
import formStateSelectData from "../../../common/helpers/formStateSelectData";
import { useAppDispatch } from "../../../common/utils/hooks";
import { createEmployeeSlice } from "../../../features/createEmployee/createEmployeeSlice";
import { modalSlice } from "../../../features/modal/modalSlice";
import InputDate from "../InputDate/InputDate";
import InputSelect from "../InputSelect/InputSelect";
import { diffYears } from "../../../common/helpers/functions";

function CreateEmployeeForm() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(createEmployeeSlice.actions.storeEmployeesFromLocalStorage());
    }, []);

    function testDates(givenDate1: string, givenDate2: string) {
        let date1 = new Date(givenDate1);
        let date2 = new Date(givenDate2);
        let today = new Date();

        return date1 < date2 && diffYears(date1, date2) >= 16 && date1 < today;
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
            <div className="inputs-container">
                <div className="label-input-wrapper">
                    <div>
                        <label htmlFor="first-name">First Name</label>
                    </div>
                    <input
                        type="text"
                        id="first-name"
                        name="firstname"
                        required
                    />
                </div>
                <div className="label-input-wrapper">
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                    </div>
                    <input
                        type="text"
                        id="last-name"
                        name="lastname"
                        required
                    />
                </div>
            </div>

            <div className="inputs-container">
                <div className="label-input-wrapper">
                    <div>
                        <label htmlFor="date-of-birth">Date of Birth</label>
                    </div>
                    <InputDate
                        id="date-of-birth"
                        name="dateOfBirth"
                        isRequired={true}
                    />
                </div>
                <div className="label-input-wrapper">
                    <div>
                        <label htmlFor="start-date">Start Date</label>
                    </div>
                    <InputDate
                        id="start-date"
                        name="startDate"
                        isRequired={true}
                    />
                </div>
            </div>

            <fieldset className="address">
                <legend>Address</legend>

                <div className="inputs-container">
                    <div className="label-input-wrapper">
                        <div>
                            <label htmlFor="street">Street</label>
                        </div>
                        <input id="street" type="text" name="street" required />
                    </div>
                    <div className="label-input-wrapper">
                        <div>
                            <label htmlFor="city">City</label>
                        </div>
                        <input id="city" type="text" name="city" required />
                    </div>
                </div>

                <div className="inputs-container">
                    <div className="label-input-wrapper">
                        <div>
                            <label htmlFor="state">State</label>
                        </div>
                        <InputSelect
                            name={undefined}
                            id="state"
                            options={formStateSelectData}
                        />
                    </div>
                </div>
                <div className="inputs-container">
                    <div className="label-input-wrapper">
                        <div>
                            <label htmlFor="zip-code">Zip Code</label>
                        </div>
                        <input
                            id="zip-code"
                            type="number"
                            name="zipCode"
                            required
                        />
                    </div>
                </div>
            </fieldset>

            <div className="inputs-container">
                <div className="label-input-wrapper">
                    <div>
                        <label htmlFor="department">Department :</label>
                    </div>
                    <InputSelect
                        name={undefined}
                        id="department"
                        options={formDepartmentSelectData}
                    />
                </div>
            </div>
            <button type="submit">Save</button>
        </form>
    );
}

export default CreateEmployeeForm;
