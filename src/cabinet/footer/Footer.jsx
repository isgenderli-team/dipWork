import React from 'react';
import f from './Footer.module.css';
import {NavLink} from "react-router-dom";

const Footer=()=>{
  return(
    <footer className={f.footer}>
      <NavLink to="">О нас</NavLink>
      <NavLink to="">Миссия</NavLink>
      <NavLink to="">Вакансия</NavLink>
      <NavLink to="">Ещё</NavLink>
    </footer>
  );
}
export default Footer;
