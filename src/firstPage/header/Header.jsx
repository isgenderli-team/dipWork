import React from 'react';
import h from "./Header.module.css";

const Header=()=>{
return (
  <header className={h.header}>
    <div>
      <div className={h.websiteName}>isgenderli.com</div>
      <div className={h.langChanger}>Switch to English</div>
    </div>
  </header>

);
}
export default Header;
