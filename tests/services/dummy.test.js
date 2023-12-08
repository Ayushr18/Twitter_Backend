import {execute} from '../../src/services/dummy-service.js';

test('result is true and returns Learning JS', () => {
    const result = execute();
    expect(result).toBe('Learning')
});