import {
    useQuery,
} from 'react-query';
import axios from 'axios';
import API from '../../Router/api';

const useFetchMessages =
    (sender: string, receiver: string | undefined) => (
        useQuery(
            ['messagesData', sender, receiver],
            () => axios.post(API.MESSAGES, { sender, receiver }, { headers: { 'x-access-token': localStorage.getItem('auth') } }),
        )
    );

export default useFetchMessages;
