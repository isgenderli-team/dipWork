import React from 'react';
import f from './Footer.module.css';

const Footer=()=>{
  return (
    <footer className={f.footer}>
       <div className={f.box}>
         <div>Наши права не защищены как и ваши: isgenderli.com&copy;2020</div>
         <div>
           <a href="#">О нас</a>
           <a href="#">Преподавателю</a>
           <a href="#">Остальным</a>
         </div>
         <div>
           <a href="">Russian</a>
           <a href="">English</a>
         </div>
       </div>
    </footer>
  );
}
export default Footer;
