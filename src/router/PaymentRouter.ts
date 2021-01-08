import TokenPage from '../pages/payment/TokenPage.vue';
import PaymentListPage from '../pages/payment/PaymentListPage.vue';

export default [
    {
        path: '/payment/token',
        component: TokenPage,
    },
    {
        path: '/payment/payment-list',
        component: PaymentListPage,
    },
];