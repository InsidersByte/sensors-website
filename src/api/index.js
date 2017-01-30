/* @flow */

import request from 'superagent';
import { API_URL } from '../config';

export default ({ endpoint, method }: { endpoint: string, method: string }): Promise<any> =>
    new Promise((resolve, reject) => {
        return request(method, `${API_URL}${endpoint}`)
            .end((error, response) => {
                if (error) {
                    return reject(error);
                }

                return resolve(response.body ? response.body : response.text);
            });
    });
