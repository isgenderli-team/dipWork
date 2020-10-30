import React from "react";
import m from "./Main.module.css";
import LeftSide from './left/LeftSide';
import RightSide from './right/RightSide';
const Main=()=> {
  return (
    <main className={m.main}>
      <div className={m.box}>
       <LeftSide/>
       <RightSide/>
      </div>
    </main>
  );
}
export default Main;
