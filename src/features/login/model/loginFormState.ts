export interface loginFormState {
    email: string;
    password: string;
    error: {
        email: string;
        password: string;
    }
}

export const loginFormState: loginFormState = {
    email: '',
    password: '',
    error: {
        email: '',
        password: ''
    }
}