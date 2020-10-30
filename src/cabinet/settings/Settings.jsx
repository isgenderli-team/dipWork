import React from 'react';
import s from './Settings.module.css';

class Settings extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      name:"Your Name",
      lastname:"Your Lastname",
      about:"About You",
      email:"Your Email",
      id:""

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
handleSave(event){
let formData = new FormData();
formData.append("id",this.state.id);
formData.append("name",this.state.name);
formData.append("lastname",this.state.lastname);
formData.append("email",this.state.email);
formData.append("about",this.state.about);
fetch("http://isgenderli.com/updateMe",{
  method:"POST",
  body:formData
}).then(response=>response.text())
  .then(result=>console.log(result));
  event.preventDefault();
  }
handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
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
      <div className={s.settingContainer}>
        <h1>Settings</h1>
        <ul>
          <li>
            <div className={s.flexInputCont}>
              <div>
                <span>Name</span>
                <div>
                  <input onChange={this.handleChange} value={this.state.name} name="name" type="text"/>
                </div>
              </div>
              <div>
                <span>Lastname</span>
                <div>
                  <input onChange={this.handleChange} value={this.state.lastname} name="lastname" type="text"/>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div>
              <span>Email</span>
              <div>
                <input onChange={this.handleChange} value={this.state.email} name="email" type="email"/>
              </div>
            </div>
          </li>

          <li>
            <div>
              <span>About</span>
              <div>
                <textarea  onChange={this.handleChange} resize="false" value={this.state.about} name="about" type="text"></textarea>
              </div>
            </div>
          </li>


        </ul>
        <div className={s.btnCont}>
          <button onClick={this.handleSave} type="submit">Save</button>
        </div>
      </div>
    );
  }
}
export default Settings;
