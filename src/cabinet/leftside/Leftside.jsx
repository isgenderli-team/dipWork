import  React from 'react';
import p from "./Leftside.module.css";
import {NavLink} from "react-router-dom";
import Footer from '../footer/Footer';
const Leftside=()=>{
  return (
    <aside>
      <div className={p.menu}>
        <nav>
          <ul>
            <li><NavLink exact to="/profile"><span><i className="fas fa-house-user"></i></span> <span>Profile</span></NavLink></li>
            <li><NavLink exact to="/profile/settings"><span><i className="fas fa-cogs"></i></span> <span>Setting</span></NavLink></li>
            <li><NavLink exact to="/profile/messages"><span><i className="fas fa-comments"></i></span> <span>Месенджер</span></NavLink></li>
            <li><NavLink exact to="/profile/friends"><span><i className="fas fa-user-friends"></i></span> <span>Друзья</span></NavLink></li>
            <li><NavLink exact to="/profile/pics"><span><i className="fas fa-camera"></i></span> <span>Фотографии</span></NavLink></li>
            <li><NavLink exact to="/profile/tasks"><span><i className="fas fa-tasks"></i></span> <span>Задачи</span></NavLink></li>
          </ul>
        </nav>
 <Footer/>
      </div>
      </aside>

  );
}
export default Leftside;
