export interface User {
    id: number;
    name: string;
    email: string;
    rol: string;
    enrollment_number: string;
    support_unit: {
        id: number;
        name: string;
    };
}