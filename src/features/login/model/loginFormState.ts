export interface LoginFormStateType {
    email: string;
    password: string;
    error: {
        email: string;
        password: string;
    }
}

export const loginFormState: LoginFormStateType = {
    email: '',
    password: '',
    error: {
        email: '',
        password: ''
    }
}