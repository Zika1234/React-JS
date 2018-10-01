import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectTrans from './components/projecttrans';
import uuid from "uuid";

class App extends Component {

  constructor(){
    super();
    this.state={
      showarray:[]
    }
    this.temparray=[]
  }

     i=0;
    handleSubmit(e){

      if(this.refs.name.value==='' || this.refs.pswrd.value==='')
      {
        alert("Null entries");
      }

      console.log("Submitted" + this.refs.name.value + this.refs.pswrd.value);

      e.preventDefault();

      let objname=this.refs.name.value;
      let objpassword=this.refs.pswrd.value
      let name, password;

      let object = {
       id:this.i,
       name:objname,
       password:objpassword

      }
      console.log(object);

      this.temparray[this.i]=object;
      this.setState({
        showarray:this.temparray
      })

      console.log(this.state.showarray)
      this.i++;


    }

    onDelete(id){
  console.log(id);
  let allProjects = this.state.showarray;
  let index = allProjects.findIndex(oneProject => oneProject.id == id);
  allProjects.splice(index,1);

  //this.tempArr.splice(id,1);
  this.setState({
    showarray:allProjects
  })
  this.i--;
}


  render() {
    return (
      <div >
          <h1>Hello World</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <table >
              <tbody>
              <tr>
                <td>Name</td>
                <td><input type='text' ref='name'/></td>
              </tr>
              <tr>
                <td>Passward</td>
                <td><input type='text' ref='pswrd' /></td>
              </tr>
              <tr>
                <td><input type="submit" value="Submit"/></td>
                </tr>
                </tbody>
          </table>
          </form>




            <ProjectTrans trans={this.state.showarray} deleteElement= {this.onDelete.bind(this)}/>
          </div>
    );
  }
}

export default App;
