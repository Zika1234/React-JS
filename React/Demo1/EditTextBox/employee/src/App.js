import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EnterDetails from './components/enterDetails';

class App extends Component {
   constructor(){
        super();
        this.state={EnteredData:{}}
    }

    handleSubmit(e){
        if(this.refs.FName.value==='' || this.refs.LName.value==='')
        {
            alert("Null Entries");
        }
        {
            console.log("Submitted" + this.refs.FName.value + this.refs.LName.value)
            this.setState({

                EnteredData:{
                FName:this.refs.FName.value,
                LName:this.refs.LName.value
          
            }
            
            
            
        });
        
    }
     
         e.preventDefault();
    }

    onChange(newvalue){
      console.log(this.newvalue);
      this.refs.FName.value=newvalue.FN;
      this.refs.LName.value=newvalue.LN;
    }

    
  render() {
    return (
      <div >
      <h1>Hello</h1>
      <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
              <label>Employee Name: </label>
              <input type="text" ref='FName'/ >
          </div>
           <div>
              <label>Employee Last Name: </label>
              <input type="text" ref='LName' />
          </div>
          <div>
                <input type="submit" value="Submit" />
            </div>
            </form>
      <EnterDetails nametoPass={this.state.EnteredData} nameonChange={this.onChange.bind(this)}/>
      </div>
    );
  }
}

export default App;
