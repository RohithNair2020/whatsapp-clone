import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import Collapse from '@mui/material/Collapse';
import { Avatar, IconButton } from '@mui/material';
import './sidebar.css';
import ChatTile from '../../components/ChatTile/ChatTile';
import { User } from '../../Types';
import {
    isArrayValidAndNotEmpty, isEnterKeyPressed, isObjectValidAndNotEmpty, isValidFunction,
} from '../../CommonUtil';
import API from '../../Router/api';
import useFetchContacts from './DataFetchHooks/useFetchContacts';

interface SidebarProps {
    user: User;
    onReceiverChange: (user: User) => void,
}

const Sidebar = (props: SidebarProps) => {
    const { user, onReceiverChange } = props;
    console.log(onReceiverChange);
    const [searchString, setSearchString] = useState<string>('');
    const [resultUser, setResultUser] = useState<User | null>(null);

    console.log('user', user);
    const { data: contactsData, isLoading: contactsLoading } =
        useFetchContacts(user.contacts);
    const contactsList = contactsData?.data;
    console.log('contact', contactsList, contactsLoading);

    const handleSelect = (event: React.MouseEvent) => {
        console.log('chng', event);
        if (isValidFunction(onReceiverChange)) {
            if (isObjectValidAndNotEmpty(resultUser)) {
                onReceiverChange(resultUser!);
                setResultUser(null);
                setSearchString('');
            }
        }
    };

    const handleContactSelect = (contact: User) => {
        if (isValidFunction(onReceiverChange)) {
            if (isObjectValidAndNotEmpty(contact)) {
                onReceiverChange(contact!);
            }
        }
    };

    const handleSearchStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
    };

    const handleSearch =
        async (e: React.KeyboardEvent) => {
            console.log('enter pressed');
            if (isEnterKeyPressed(e)) {
                const response = await axios.post(API.USERS.GET_USER, { phone: searchString }, { headers: { 'x-access-token': localStorage.getItem('auth') } });
                console.log('response data', response);
                const userFromResponse = response.data;
                if (isObjectValidAndNotEmpty(user)) {
                    if (user.phone) {
                        setResultUser(userFromResponse);
                    } else {
                        setResultUser(null);
                    }
                }
            }
        };

    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <div className="sidebar-header-profile-pic">
                    <Avatar className="avatar" src="/propic1.jfif" />
                </div>
                <h3>{user?.name || user?.phone || ''}</h3>
                <div className="sidebar-header-options">
                    <IconButton>
                        <DonutLargeIcon className="sidebar-icon status-icon" />
                    </IconButton>
                    <IconButton>
                        <ChatIcon className="sidebar-icon" fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon className="sidebar-icon" />
                    </IconButton>
                </div>
            </div>
            <div className="search-bar">
                <div className="search-input-container">
                    <SearchIcon
                        className="search-input-icon"
                        fontSize="small"
                    />
                    <input
                        type="text"
                        className="search-input"
                        onKeyDown={handleSearch}
                        value={searchString}
                        onChange={handleSearchStringChange}
                    />
                </div>
                <IconButton>
                    <FilterListIcon className="filter-list-icon" fontSize="small" />
                </IconButton>
            </div>
            <Collapse in={isObjectValidAndNotEmpty(resultUser)}>
                <div className="results-bar">
                    <button type="submit" className="chat-tile-button" onClick={handleSelect}>
                        <ChatTile name={resultUser?.name || resultUser?.phone || ''} />
                    </button>
                </div>
            </Collapse>
            <div className="chat-list-container">
                {
                    isArrayValidAndNotEmpty(contactsList) &&
                    contactsList.map((contact: User) => (
                        <button key={contact.userId} type="submit" className="chat-tile-button" onClick={() => handleContactSelect(contact)}>
                            <ChatTile key={contact?.userId} name={contact?.name || contact?.phone || ''} />
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;
