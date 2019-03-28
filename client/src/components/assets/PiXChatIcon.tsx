import React from 'react';
import pixChat from '../../assets/pixchat.svg';

const pixChatSVG = () => (
  <header className="PiXChatIconHeader">
    <div className="PiXChatIcon-Component">
      <img src={pixChat} className="pixchaticon" id="pixchaticon" alt="pixchaticon-here" />
    </div>
  </header>
);

export default pixChatSVG;
