import Usage from './Usage';

describe('Usage model', () => {
    let model;

    const testFuel = 'test fuel',
        testPerc = 50;

    beforeEach(() => {
        model = new Usage({
            fuel: testFuel,
            perc: testPerc
        });
    });

    it('should return the correct values', () => {
        expect(model.id).toBe(testFuel);
        expect(model.value).toBe(testPerc);
        expect(model.label).toBe(testFuel);
    });
});