import React, { Component } from 'react';
import './App.css';
import Input from './component/input';


class App extends Component {

  constructor(){
    super();
    this.state={
      myarray:[]
    }
  }

  addData(data){
      
      let arr= this.state.myarray;
      arr.push(data);
      this.setState({
        myarray:arr
      },()=>{console.log(this.state.myarray)})

  }


  deleteinApp(index){
    let arr= this.state.myarray;
      arr.splice(index,1);
      this.setState({
        myarray:arr
      },()=>{console.log(this.state.myarray)})


  }



  render() {
    return (
      <div className="App">
        <Input addInput={this.addData.bind(this)} app2Input={this.state.myarray} deletetoApp={this.deleteinApp.bind(this)}/>


      </div>
    );
  }
}

export default App;
