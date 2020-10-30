import React from 'react';
import p from './Profile.module.css';
import {NavLink} from "react-router-dom";

class Profile extends React.Component{
  constructor() {
    super();
    this.state={
      name:"",
      lastname:"",
      about:""
    }
  }
  componentDidMount() {

    fetch("http://isgenderli.com/settingDetails")
      .then(response=>response.json())
      .then(result=>{
        this.setState({
          name:result.name,
          lastname:result.lastname,
          about:result.about,
          email:result.email,
          id:result.id
        })
      })
  }

  render() {
    return (
      <div className={p.profileContainer}>
        <header>
          <div className={p.pPicCont}>
            <div className={p.pBackgroundPic}>

            </div>
            <div className={p.pAvatar}>
              <img src="https://pickaface.net/gallery/avatar/20140208_115432_4529_Programmer.png" alt=""/>
            </div>

          </div>
          <div className={p.detailsBar}>
            <section className={p.dbLeft}>
              <ul>
                <li className={p.dbUserName}>{this.state.lastname} {this.state.name}</li>
                <li className={p.dbProfes}>Programmer</li>
                <li className={p.dbLocation}>Moscow, Russia</li>
              </ul>
            </section>
            <section className={p.dbRight}>
              <div>
                <NavLink to="">Написать сообщение</NavLink>
              </div>
            </section>
          </div>


          <div className={p.pInfoBar}>
            <NavLink to="">друзей 7</NavLink>
            <NavLink to="">фотографии 4</NavLink>
            <NavLink to="">друзей 7</NavLink>
            <NavLink to="">фотографии 4</NavLink>
            <NavLink to="">друзей 7</NavLink>
          </div>
        </header>
        <div className={p.pAbout}>
          <h3>About me</h3>
          <p>
          {this.state.about}
          </p>
          <p>
            <h3 className={p.pContact}>Contact</h3>
            {this.state.email}

          </p>
        </div>
      </div>
    )
  }
}
export default Profile;
