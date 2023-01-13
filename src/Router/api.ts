// export const baseUrl = 'http://localhost:8090';
export const baseUrl = 'https://wa-backend.onrender.com';

const API = {
    LOGIN: `${baseUrl}/api/login`,
    REGISTER: `${baseUrl}/api/register`,
    USERS: {
        GET_ALL_USERS: `${baseUrl}/api/users`,
        GET_USER: `${baseUrl}/api/users/user`,
    },
    CONTACTS: `${baseUrl}/api/contacts`,
    MESSAGES: `${baseUrl}/api/messages`,
    NEW_MESSAGE: `${baseUrl}/api/messages/new`,
};

export default API;
