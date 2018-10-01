import React, { Component } from 'react';
import Display from './display'


class Input extends Component {

    constructor(){
        super();
        this.state={
            myobj:{}
        }
    }

    onclick(){
        if(this.refs.name.value==='' || this.refs.email.value==='' || this.refs.mobile.value==='' || this.refs.add.value==='' || this.refs.purpose.value==='' || this.refs.date.value==='' )
        {
            alert("Fill all fields");
        }
        else
        {
            this.setState({
                myobj:{
                name:this.refs.name.value,
                email:this.refs.email.value,
                mobile:this.refs.mobile.value,
                add:this.refs.add.value,
                purpose:this.refs.purpose.value,
                date:this.refs.date.value
                }
            },()=>{console.log(this.state.myobj);
                this.props.addInput(this.state.myobj)
            }
            )
        }
    }   

    deleteinInput(index){

        this.props.deletetoApp(index);
    }
  render() {
    return (
      <div >
    
        <div class="container">
        <h2 class="jumbotron">Customer Registration Form</h2>
        <form role="form" bgcolor="#ccffff" >
            <div  class="form-group col-sm-4 col-sm-offset-4">
        <input type="text" ref="name" placeholder="Username" class="form-control"/><br/>
      
        <input type="text" ref="email" placeholder="Email" class="form-control"/><br/>
        <input type="number" ref="mobile" placeholder="Mobile Number" class="form-control"/><br/>
        <input type="text" ref="add" placeholder="Address" class="form-control"/><br/>
        <input type="text" ref="purpose" placeholder="Purpose of Visit" class="form-control"/><br/>
        <input type="date" ref="date" placeholder="Date of Visit" class="form-control"/><br/>
        <input type="button" value="Add Details" class="btn btn-lg btn-primary btn-block" onClick={this.onclick.bind(this)} />
          </div>
        </form>
        </div>
        <Display input2Display={this.props.app2Input} delete2Input={this.deleteinInput.bind(this)}/>
      </div>
    );
  }
}

export default Input;