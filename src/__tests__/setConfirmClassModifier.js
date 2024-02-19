import setConfirmClassModifier from "../setConfirmClassModifier";

describe('setConfirmClassModifier', () => {
    test('Class setConfirmClassModifier(true)', () => {
        const result = setConfirmClassModifier(true);
        expect(result).toEqual('confirm disabled');
    })

    test('Class setConfirmClassModifier(false)', () => {
        const result = setConfirmClassModifier(false);
        expect(result).toEqual('confirm success');
    })

    test('Class setConfirmClassModifier(true) with an other Class', () => {
        const result = setConfirmClassModifier(true,"test");
        expect(result).toEqual('test disabled');
    })

    test('Class setConfirmClassModifier(false) with an other Class', () => {
        const result = setConfirmClassModifier(false,"test");
        expect(result).toEqual('test success');
    })
})