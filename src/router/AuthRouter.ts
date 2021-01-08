import SignInPage from '../pages/auth/SignInPage.vue';
import SignUpPage from '../pages/auth/SignUpPage.vue';

export default [
    {
        path: '/auth/sign-in',
        component: SignInPage,
    },
    {
        path: '/auth/sign-up',
        component: SignUpPage,
    },
];