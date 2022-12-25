import {
    useQuery,
} from 'react-query';
import axios from 'axios';
import API from '../../Router/api';

const useFetchUsers =
    () => (
        useQuery(
            'billingHistoryData',
            () => axios.get(API.USERS.GET_ALL_USERS),
        )
    );

export default useFetchUsers;
