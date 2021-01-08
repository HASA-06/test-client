import axios from 'axios'

import Service from './index';

class AuthService {
    private signInPath = '/api/v1/auth/sign-in';
    private signUpPah = '/api/v1/auth/sign-up';

    async signIn(email: string, password: string) {
        const url = `${ Service.developmentHost }${ this.signInPath }`;
        const response = await axios.post(url, {
            email: email,
            password: password,
        });

        return response;
    }

    async signUp(email: string, password: string, passwordCheck: string) {
        const url = `${ Service.developmentHost }${ this.signUpPah }`;
        const response = await axios.post(url, {
            email: email,
            password: password,
            passwordCheck: passwordCheck,
        });

        return response;
    }
}

export default new AuthService();