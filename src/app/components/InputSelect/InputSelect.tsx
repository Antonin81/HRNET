import { InputSelectProps } from "../../../common/utils/types";

function InputSelect({ name, id, options }: InputSelectProps) {
    return (
        <select name={name ? name : id} id={id}>
            {options.map((option) =>
                option.value ? (
                    <option value={option.value} key={option.name}>
                        {option.name}
                    </option>
                ) : (
                    <option key={option.name}>{option.name}</option>
                )
            )}
        </select>
    );
}

export default InputSelect;
