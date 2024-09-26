import { InputDateProps } from "../../../common/utils/types";

function InputDate({ name, id, isRequired }: InputDateProps) {
    return (
        <input
            id={id}
            type="date"
            name={name ? name : id}
            required={isRequired}
        />
    );
}

export default InputDate;
