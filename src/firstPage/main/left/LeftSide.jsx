import React from 'react';
import ls from './LeftSide.module.css';

const LeftSide=()=>{
return (
  <aside >
    <div className={ls.aside}>
    <div>
      <h1>Добро пожаловать в Isgenderli.com</h1>
      <small>Идеи создания сайта взяты из разных источников</small>
    </div>
    <div>
      <p>Это моя дипломная работа.</p>
      <p>Она сделана на react+css+php.</p>
      <p>При этом с гордостью могу сообщить, что умею более или менее работать на:<br/>
        <ul>
          <li>html5</li>
          <li>css3</li>
          <li>javascript Vanilla</li>
          <li>php</li>
          <li></li>
        </ul>
      </p>
    </div>

   </div>









  </aside>
);
}
export default LeftSide;
