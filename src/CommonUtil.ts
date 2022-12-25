// import { AxiosError } from 'axios';
// import getProperty from 'lodash';

export const isValidFunction = (aFunction?: unknown) => (
    aFunction && typeof aFunction === 'function'
);

export const isArrayValidAndNotEmpty =
    (anArray: unknown): boolean => Boolean(anArray) && Array.isArray(anArray) && anArray.length > 0;

export const isObjectValidAndNotEmpty = (anObject: unknown): boolean => (
    anObject && typeof anObject === 'object' && Object.keys(anObject).length > 0
) as boolean;

// eslint-disable-next-line max-len
// export const getStringFromObject = (string: string, obj: object, defaultValue: unknown = '') => getProperty(obj, string, defaultValue);

export const isEnterKeyPressed = (e: React.KeyboardEvent<HTMLDivElement>) => (
    (e.keyCode === 13 || e.which === 13) && e.shiftKey === false
);

export const isStringNullOrUndefined = (stringToCheck: unknown) => {
    if (!stringToCheck) {
        return true;
    }
    if (stringToCheck === 'undefined') {
        return true;
    }
    if (stringToCheck === 'null') {
        return true;
    }
    return false;
};

const isJsonString = (str: string) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

// export const getErrorMessage = (error: AxiosError<ErrorType>) => {
//     const { response } = error;
//     let errorMessage = 'Api Call Failed';
//     if (isObjectValidAndNotEmpty(response)) {
//         errorMessage = response?.data?.exception || response?.data?.message || errorMessage;
//         if (response?.status === 401) {
//             errorMessage = 'Session Timed Out. Please Login Again';
//         }
//     }
//     return errorMessage;
// };

export default isJsonString;
