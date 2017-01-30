import nock from 'nock';
import api from './';

describe('api', () => {
    let scope;

    beforeEach(() => {
        scope = nock('http://localhost:8080')
            .get('/sensors')
            .once()
            .reply(200, [{ id: 1 }]);
    });

    afterEach(() => {
        expect(scope.isDone()).toBe(true);
    });

    it('should return data', () => {
        return api({ endpoint: '/sensors', method: 'get' })
            .then((sensors) => {
                expect(sensors.length).toBe(1);
                expect(sensors[0]).toEqual({ id: 1 });
            });
    });
});
