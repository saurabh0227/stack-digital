import { expect } from 'chai';
import { fetchData } from '../src/api/logs/controller';


describe('Logs Controller - fetchData', () => {
    it('API testing', () => {
        let res = {
            end: function () { },
            status: function (s) { this.statusCode = s; return this; },
            json: function (s) { this.data = s; return this; }
        };
        const result = fetchData({}, res, () => { })
        expect(result)
    })
})