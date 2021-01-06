import axios from 'axios';

import Service from './index';

class HomeService {
    public homePath = '/api';

    async checkServer() {
        const url = `${ Service.developmentHost }${ this.homePath }/check`;
        const response = await axios.get(url);
        return response;
    }
}

export default new HomeService();
