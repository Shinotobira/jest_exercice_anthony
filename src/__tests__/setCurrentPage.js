import {setCurrentPage} from "../setCurrentPage";

describe('setCurrentPage', () => {
    test('set a current page max = 0 & skip = 10 expect to get 1', () => {
        const result = setCurrentPage({ max: 0, skip: 10 });
        expect(result).toEqual(1);
    })
    test('set a current page max = 10 skip = 20 expect to get 2', () => {
        const result = setCurrentPage({ max: 10, skip: 20 });
        expect(result).toEqual(2);
    })
    test('set a current page max = 10 skip = 15 expect to get 2', () => {
        const result = setCurrentPage({ max: 10, skip: 15 });
        expect(result).toEqual(2);
    })
    test('set a current page max = 10 skip = -15 expect to get 2', () => {
        const result = setCurrentPage({ max: 10, skip: -15 });
        expect(result).toEqual(-1);
    })
    test('set a current page max = 10 skip = 2 expect to get 1', () => {
        const result = setCurrentPage({ max: 10, skip: 0 });
        expect(result).toEqual(1);
    })
});