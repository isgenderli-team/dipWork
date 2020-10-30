import React from 'react';
import p from './Pics.module.css';
const Pics =()=>{
  return (
  <div className={p.picContainer}>
       <div className={p.containerHeader}>
          <span>Фотографии</span>
          <span>18</span>
       </div>
      <div className={p.containerBody}>
         <div className={p.picBox}></div>
         <div className={p.picBox}></div>
         <div className={p.picBox}></div>
         <div className={p.picBox}></div>
      </div>
  </div>
  )
}
export default Pics;
