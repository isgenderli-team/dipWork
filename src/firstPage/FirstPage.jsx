import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import f from './Firstpage.module.css';
const FirstPage=()=>{
  return(
    <div className={f.container}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default FirstPage;
