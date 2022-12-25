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
import { isArrayValidAndNotEmpty, isObjectValidAndNotEmpty } from '../../CommonUtil';

interface SidebarProps {
    user: User | null;
}

const Sidebar = (props: SidebarProps) => {
    const { user } = props;
    const [userList, setUserList] = useState<[User] | []>([]);

    const { data, status, isLoading } = useFetchUsers();
    console.log('useFetch', data, status);

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
                <h3>{user?.phone || ''}</h3>
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
                        autoComplete
                        options={userList}
                        getOptionLabel={(option) => option.phone}
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        renderOption={
                            // eslint-disable-next-line max-len, @typescript-eslint/no-unused-vars
                            (optionProps: React.HTMLAttributes<HTMLLIElement>, option) => <ChatTile name={option.phone || ''} />
                        }
                        // eslint-disable-next-line max-len
                        filterOptions={(options) => options.filter((option) => option.phone !== user?.phone)}
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
                <FilterListIcon className="filter-list-icon" fontSize="small" />
            </div>
            <div className="chat-list-container">
                <ChatTile name={user?.phone || ''} />
            </div>
        </div>
    );
};

export default Sidebar;
