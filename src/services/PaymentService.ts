import axios from 'axios';

import Service from './index';
import store from '../store/index';

class PaymentService {
    private tokenPath = '/api/v1/payment/token';
    private findAllByStatusPath = '/api/v1/payment/find-all-by-status';

    makeHeader() {
        if (store.state.auth) {
            return {
                authorization: (store.state.auth as unknown as any).accessToken,
            };
        } else {
            throw 'No token';
        }
    }

    async token() {
        const header = this.makeHeader();
        const url = `${ Service.developmentHost }${ this.tokenPath }`;
        const response = await axios.post(url, undefined, {headers: header});

        return response;
    }

    async findAllByStatus(paymentStatus: number) {
        const header = this.makeHeader();
        const url = `${ Service.developmentHost }${ this.findAllByStatusPath }`;
        const response = await axios.post(url, {statusCode: paymentStatus}, {headers: header});
        
        return response;
    }
}

export default new PaymentService();