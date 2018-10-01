import React, { Component } from 'react';



class EnterDetails  extends Component {

    constructor(){
        super();
        this.state={
            Ename:{
                FN:'',
                LN:''
            }};
        }
    

   editChange(e){
       this.setState({
           Ename:{
             FN:  this.refs.changeName.value,
            LN: this.refs.changeLName.value }});

            this.props.nameonChange(this.state.Ename);
            e.preventDefault()
          
        
   }

   onDelete(){
       this.refs.fn.value='';
       this.refs.ln.value='';
       this.refs.changeName.value='';
       this.refs.changeLName.value='';
   }


  render() {
    return (
      <div >
          <h2>Enter yout Details </h2>
          <form onSubmit={this.editChange.bind(this)}>
           <div>
              <label>Employee Name: </label>
              <input type="text" value={this.props.nametoPass.FName} ref='fn'/ >
          </div>
          <div>
              <label>Employee LastName: </label>
              <input type="text" value={this.props.nametoPass.LName} ref='ln'/ >
          </div>
          <div>
                <input type="Submit" value="Edit"  />
            </div>
            <div>
                <input type="button" value="Delete" onClick={this.onDelete.bind(this)} />
            </div>
          <div>
              <label>Employee Name: </label>
              <input type="text" ref='changeName'/ >
          </div>
          <div>
              <label>Employee LName: </label>
              <input type="text" ref='changeLName'/ >
          </div>
          </form>
          
            
      
      </div>
    );
  }
}

export default EnterDetails ;