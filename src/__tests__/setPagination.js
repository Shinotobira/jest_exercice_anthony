import {setPagination} from "../setPagination";

describe('setPagination', () => {
    test('returns the pagination object', () => {
        const total = 10;
        const max = 20;
        const skip = 0;
        const expected = {
            total,
            numberItems: max,
            numberPages: 1,
            currentPage: 1,
        };
        const result = setPagination({
            total,
            max,
            skip,
        });
        expect(result).toEqual(expected);
    });
    test('returns the paginations object with default values', () => {
        const expected = {
            total: 1,
            numberItems: 1,
            numberPages: 1,
            currentPage: 1,
        };
        const result = setPagination({});
        expect(result).toEqual(expected);
    });
    }
);