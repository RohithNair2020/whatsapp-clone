import {
    useQuery,
} from 'react-query';
import axios from 'axios';
import API from '../../../Router/api';

const useFetchContacts =
    (contacts: string[]) => (
        useQuery(
            ['contactsData', contacts],
            () => axios.post(API.CONTACTS, { contactIDs: contacts }, { headers: { 'x-access-token': localStorage.getItem('auth') } }),
        )
    );

export default useFetchContacts;
