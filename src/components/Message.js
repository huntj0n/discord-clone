import React from 'react';
import "./Message.css";
import { Avatar } from '@material-ui/core';

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    Mr. Username
                    <span className="message__timestamp">
                        10/10/10
                    </span>
                </h4>

                <p>Yall listen up heres the story</p>
            </div>

        </div>
    )
}

export default Message
