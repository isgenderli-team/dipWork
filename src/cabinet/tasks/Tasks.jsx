import React from 'react';
import t from './Tasks.module.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-emmet";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import "emmet-core";
import 'html-differ';

const Li=(props)=>{
  return(
    <li>{props.ilItem}</li>
  )
}

class Tasks extends React.Component{
  constructor() {
    super();
    this.htmlTask = React.createRef();
    this.handleShow = this.handleShow.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state={
      result:"",
      list:[],
      taskDetails:[]
    }
  }
handleCheck(){
  let userCodeOriginal = this.htmlTask.current.editor.getValue();
  let userCodeToCompare = userCodeOriginal.replace(/\s{1,}/g,"");
  userCodeToCompare = userCodeToCompare.toLowerCase();
  let formData = new FormData();
  formData.append('userSolution',userCodeToCompare);
  formData.append('taskId',this.state.taskDetails.id);
    fetch("http://isgenderli.com/handleCheck",{
    method:'POST',
    body:formData
    }).then(response=>response.text())
      .then(res=> {
        this.setState({
          result: res == "success" ? "Всё правильно решено!Молодец!" : "Результат не соответсвует правилам"

        })

      })
}



  handleShow(){
 let userCodeToShow = this.htmlTask.current.editor.getValue();
 try{
   eval(userCodeToShow)
 }catch(error){
   alert(error);
 }
  }
  componentDidMount() {
    let taskId = 1;
    let formData = new FormData();
    formData.append('id',taskId);
    fetch("http://isgenderli.com/getTask",{
     method:'POST',
      body:formData
   }).then(response=>response.json())
      .then(result=>{
        let des = result['discreption'].split(".");
        this.setState({
          list: des.map((item,index)=>{
            return <Li key={index} ilItem={item}/>
          })
        });
        this.setState({
          taskDetails:result
        })
      });
  }



  render() {
    return (
     <div>
          <div className={t.taskContainer}>
            <div className={t.taskExplain}>
              <h3>{this.state.taskDetails.title}</h3>
              <small>Условие задачи</small>
              <ul>
                {this.state.list}
              </ul>
              <h4>{this.state.result}</h4>
            </div>
            <div className={t.taskArea}>
              <AceEditor
                mode='javascript'
                theme='dracula'
                ref={this.htmlTask}
                width='530px'
                height='420px'
                fontSize='20px'
                setOptions={{
                  enableEmmet: true
                }}
              />

            </div>
          </div>
       <div className={t.btnContainer}>
       <button onClick={this.handleShow}>Show result</button>
       <button onClick={this.handleCheck}>Check code</button>
       </div>
       </div>
    );
  }
}
export default Tasks;
