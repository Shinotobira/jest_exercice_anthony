import {setNumberPages} from "../setNumberPages";


describe('setNumberPages', () => {
    test.each([
        { total: 10, max: 20, expected: 1 },
        { total: 40, max: 10, expected: 3 },
        { total: -10, max: 10, expected: 1 },
        { total: 40, max: -10, expected: -5 },
        { total: 0, max: 0, expected: 1 },
        { total: 0, max: 10, expected: 1 },
        { total: 0, max: -5, expected: -1 },
        { total: -5, max: 0, expected: 1},
        { total: undefined, max: undefined, expected: 1},
        { total: 10, max: 0, expected: Infinity},
    ])('returns the number of pages', ({ total, max, expected }) => {
        expect(setNumberPages({ total, max })).toEqual(expected);
    });
});