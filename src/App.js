import React from 'react';
import './App.css';
import {Route,BrowserRouter} from "react-router-dom";
import c from "./cabinet/Default-cabinet.module.css";
import Header from "./cabinet/header/Header";
import Leftside from "./cabinet/leftside/Leftside";
import Profile from "./cabinet/profile/Profile";
import Messages from "./cabinet/messages/Messages";
import Friends from "./cabinet/friends/Friends";
import Pics from "./cabinet/pics/Pics";
import Tasks from "./cabinet/tasks/Tasks";
import Settings from "./cabinet/settings/Settings";

function App() {
  return (
    <BrowserRouter>


        <Header/>
         <div className={c.flexCont}>
            <Leftside/>
            <aside className={c.content}>
               <div className={c.contentBox}>
                  <Route exact path="/" render={()=><Profile/>}/>
                  <Route exact path="/profile" render={()=><Profile/>}/>
                  <Route exact path="/profile/settings" render={()=><Settings/>}/>
                  <Route exact path="/profile/messages" render={()=><Messages/>}/>
                  <Route exact path="/profile/friends" render={()=><Friends/>}/>
                  <Route exact path="/profile/pics" render={()=><Pics/>}/>
                  <Route exact path="/profile/tasks" render={()=><Tasks/>}/>
               </div>
            </aside>
         </div>






    </BrowserRouter>
  );
}

export default App;
