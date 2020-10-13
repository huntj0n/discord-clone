import React from 'react'
import './ChatHeader.css';

import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from '@material-ui/icons/Inbox';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

function ChatHeader() {
    return (
        <div className="chatheader">
            <div className="chatheader__left">
                <h3>
                    <span className="chatheader__hash">
                    #
                    </span>
                    Test Channel Name
                </h3>
            </div>
            <div className="chatheader__right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatheader__search">
                    <input placeholder="Search "/>
                    <SearchIcon />
                </div>

                <InboxIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
