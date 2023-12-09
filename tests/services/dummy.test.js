import * as dummyFunction from '../../src/services/dummy-service.js';

test('result is true and returns Learning JS', () => {
    const spy = jest.spyOn(dummyFunction, 'helper').mockImplementation(() => {
        return true;
    })
    const result = dummyFunction.execute();
    expect(result).toBe('Learning');
});