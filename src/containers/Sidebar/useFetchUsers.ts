import {
    useQuery,
} from 'react-query';
import axios from 'axios';
import API from '../../Router/api';

const useFetchUsers =
    () => (
        useQuery(
            'usersData',
            () => axios.get(API.USERS.GET_ALL_USERS, { headers: { 'x-access-token': localStorage.getItem('auth') } }),
        )
    );

export default useFetchUsers;
