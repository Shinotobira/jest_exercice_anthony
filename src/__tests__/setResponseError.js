import {setResponseError, STATUS_API, STATUS_HTTP, STATUS_HTTP_MESSAGES} from "../setResponseError";

describe('setResponseError', () => {
    test.each([
        [STATUS_API.WARNING, undefined, {label: 'Anomaly label', detail: 'Anomaly detail', type: 'danger', iconName: 'alert'}],
        [STATUS_API.ERROR, undefined, {label: 'Anomaly label', detail: 'Anomaly detail'}],
        [STATUS_API.WARNING, undefined, {label: STATUS_HTTP_MESSAGES[STATUS_API.WARNING], detail: '', type: 'danger', iconName: 'alert'}],
        [STATUS_API.ERROR, undefined, {label: STATUS_HTTP_MESSAGES[STATUS_API.ERROR], detail: ''}],
        [STATUS_HTTP.SUCCESS, undefined, {}],
    ])('returns the object', (status, type,expected) => {
        const response = {
            anomaly: {
                label: expected.label,
                detail: expected.detail,
            },
            status,
        };
        const result = setResponseError({ response });
        expect(result).toEqual(expected);
    });

});
