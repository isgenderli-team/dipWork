import  React from 'react';
import h from "./Header.module.css";
import {Redirect} from "react-router-dom";

class Header extends React.Component{
  constructor(props) {
    super(props);

  }
  componentDidMount() {
  }
  logoutFunc(){
    fetch("http://isgenderli.com/logout")
      .then(response=>response.text())
      .then(info=>{
        if(info=="success"){
          <Redirect to={{
            pathname:"/"
          }}/>
  console.log("true");
        }else{
          console.log("false");
        }
      })
  }

  render() {
    return (
      <header className={h.header}>
        <div>
          <div className={h.websiteName}>isgenderli.com</div>
          <div onClick={this.logoutFunc} className={h.langChanger}>
            Logout
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
