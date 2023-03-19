interface LoginUserI {
    email: string;
    password: string;
}

interface RegisterI {
    email: string;
    password: string;
    doctorCode?: string;
    name: string;
    surname: string;
}