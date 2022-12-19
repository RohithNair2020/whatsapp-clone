import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Avatar, IconButton } from '@mui/material';
import './sidebar.css';
import ChatTile from '../../components/ChatTile/ChatTile';

interface SidebarProps {}

const Sidebar = (props: SidebarProps) => {
    console.log(props);
    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <div className="sidebar-header-profile-pic">
                    <Avatar className="avatar" />
                </div>
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
                    <input type="text" className="search-input" />
                </div>
                <FilterListIcon fontSize="small" />
            </div>
            <div className="chat-list-container">
                <ChatTile />
                <ChatTile />
                <ChatTile />
                <ChatTile />
                <ChatTile />
            </div>
        </div>
    );
};

export default Sidebar;
