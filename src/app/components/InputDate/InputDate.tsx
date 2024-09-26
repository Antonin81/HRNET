type InputDateProps = {
    name: string | undefined;
    id: string;
    isRequired: boolean;
};

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
