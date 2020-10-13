import React from 'react';
import './Chat.css';

import ChatHeader from './ChatHeader';
import Message from './Message';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chat__input">
                <AddCircleIcon />
                <form>
                    <input type="text" placeholder={`Message #CoolChannel`}/>
                    
                    <button className="chat__inputButton" type="submit">Send Message</button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize='large'/>
                    <GifIcon fontSize='medium' style={{ backgroundColor:"lightgray", color:"#363a3f", borderRadius: '5px', position:'relative', bottom:'5px'}}/>
                    <EmojiEmotionsIcon fontSize='large'/>
                </div>
            </div>
        </div>
    )
}

export default Chat
