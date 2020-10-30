import React from 'react';
import rs from './RightSide.module.css';
import Login from "./Login";
import Registration from "./Registration";
const RightSide=()=>{
  return(
    <aside className={rs.aside}>
     <Login/>
     <Registration/>
      <section>mini information</section>
    </aside>
  );
}
export default RightSide;
