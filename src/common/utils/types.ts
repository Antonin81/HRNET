export interface InputDateProps {
    name: string | undefined;
    id: string;
    isRequired: boolean;
}

export interface InputSelectProps {
    name: string | undefined;
    id: string;
    options: {
        name: string;
        value: string | undefined;
    }[];
}

export interface Employee {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    street: string;
    city: string;
    state: string;
    zipCode: number;
    department: string;
}
