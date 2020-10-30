import React from 'react';
import f from './Friends.module.css';
import {NavLink} from "react-router-dom";
const Friends =()=>{
  return (
    <div className={f.friendsListContainer}>
       <header>Your Friends</header>
       <ul>
         <li className={f.friendListItem}>
           <div className={f.fliImgContainer}>
             <NavLink to=""><img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/></NavLink>
           </div>
           <div className={f.fliDetails}>
             <NavLink to=""><h5>Michael Ivanov</h5></NavLink>
             <NavLink to="">Написать сообщение</NavLink>
           </div>
         </li>
         <li className={f.friendListItem}>
           <div className={f.fliImgContainer}>
             <NavLink to=""><img src="https://www.eefsc.com.br/cover.png" alt=""/></NavLink>
           </div>
           <div className={f.fliDetails}>
             <NavLink to=""><h5>Sasha Matveev</h5></NavLink>
             <NavLink to="">Написать сообщение</NavLink>
           </div>
         </li>
         <li className={f.friendListItem}>
           <div className={f.fliImgContainer}>
             <NavLink to=""><img src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-9.jpg" alt=""/></NavLink>
           </div>
           <div className={f.fliDetails}>
             <NavLink to=""><h5>Oleg Sergeev</h5></NavLink>
             <NavLink to="">Написать сообщение</NavLink>
           </div>
         </li>
       </ul>
    </div>
  )
}
export default Friends;
