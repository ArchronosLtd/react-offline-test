import fs from 'fs';

import energyUsageSvc from './energy-usage';

describe('Energy Usage Service', () => {
    let fakeFetch

    beforeEach(() => {
        fakeFetch = jest.fn();
        window.fetch = fakeFetch;
    });

    it('should catch invalid data gets the data', async () => {

        // a deliberately errorful response
        fakeFetch.mockResolvedValue({
            json: () => []
        });

        expect.assertions(1);
        await expect(energyUsageSvc.get()).rejects.toEqual({
            error: 'Could not fetch data from 3rd party',
        });
    });

    it('should return the correct data', async () => {
        const fakeData = fs.readFileSync('./example_api_response.json');

        // a valid response
        fakeFetch.mockResolvedValue({
            json: () => JSON.parse(fakeData.toString())
        });

        await expect(energyUsageSvc.get()).resolves.toHaveLength(9);
    });
})