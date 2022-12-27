import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Avatar, IconButton } from '@mui/material';
import './sidebar.css';
import ChatTile from '../../components/ChatTile/ChatTile';
import { User } from '../../Types';
import useFetchUsers from './useFetchUsers';
import { isArrayValidAndNotEmpty, isObjectValidAndNotEmpty, isValidFunction } from '../../CommonUtil';

interface SidebarProps {
    user: User;
    onReceiverChange: (user: User) => void,
}

const Sidebar = (props: SidebarProps) => {
    const { user, onReceiverChange } = props;
    const [userList, setUserList] = useState<User[]>([]);

    const { data, status, isLoading } = useFetchUsers();
    console.log('useFetch', data, status);

    const handleChange = (event: React.SyntheticEvent<Element, Event>, value: User | null) => {
        console.log('chng', value);
        if (isValidFunction(onReceiverChange)) {
            if (isObjectValidAndNotEmpty(value)) {
                onReceiverChange(value!);
            }
        }
    };

    useEffect(() => {
        if (isObjectValidAndNotEmpty(data)) {
            if (isArrayValidAndNotEmpty(data!.data)) {
                setUserList(data!.data);
            }
        }
    }, [data]);

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
                    <Autocomplete
                        sx={{
                            width: '100%',
                        }}
                        loading={isLoading}
                        onChange={handleChange}
                        options={userList}
                        getOptionLabel={(option: User) => option.phone}
                        // eslint-disable-next-line react/no-unstable-nested-components
                        PaperComponent={({ children }) => <div className="dropdown-container">{children}</div>}
                        renderOption={
                            (optionProps, option) => (
                                <li {...optionProps} className="list-item">
                                    <ChatTile key={option.name} {...optionProps} name={option.name || option.phone || ''} />
                                </li>
                            )
                        }
                        // eslint-disable-next-line max-len
                        filterOptions={(options: User[]) => options.filter((option) => option.phone !== user?.phone)}
                        renderInput={(params: AutocompleteRenderInputParams) => (
                            <div ref={params.InputProps.ref}>
                                <input
                                    type="text"
                                    style={{
                                        outline: 'none',
                                        border: 'none',
                                        width: '100%',
                                        height: '25px',
                                        color: '#ddd',
                                        backgroundColor: '#202c33',
                                    }}
                                    className="search-input"
                                    {...params.inputProps}
                                />
                            </div>
                        )}
                    />
                </div>
                <IconButton>
                    <FilterListIcon className="filter-list-icon" fontSize="small" />
                </IconButton>
            </div>
            <div className="chat-list-container">
                <ChatTile name={user?.name || user?.phone || ''} />
            </div>
        </div>
    );
};

export default Sidebar;
