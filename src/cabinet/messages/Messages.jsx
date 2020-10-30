import React from 'react';
import m from './Messages.module.css';
const Messages =()=>{
  return (
    <div className={m.messengerContainer}>
      <div className={m.mcLeft}>
        <div className={m.mclHeader}>Chat</div>
        <ul>
          <li>
            К сожалению у вас нет сообщений..
          </li>
        </ul>
      </div>
      <div className={m.mcRight}>
        <div className={m.mcrHeader}>
          Lisa
        </div>
        <div className={m.mcrBody}>awdad</div>
        <div className={m.mcrFooter}>
          <div className={m.mcrTextarea} contentEditable="true"></div>
        </div>
      </div>
    </div>

  )
}
export default Messages;
