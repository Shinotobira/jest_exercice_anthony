import { setDate } from "../formatDate";

describe('setDate', () => {
    test.each([
        ['01/01/1970', '01/01/1970'],
        ['2022-12-31', '31/12/2022'],
        ['', ''],
        [null, ''],
        [undefined, ''],
    ])('returns the set date', (date, expected) => {
        const result = setDate({ date });
        expect(result).toEqual(expected);
    });
});