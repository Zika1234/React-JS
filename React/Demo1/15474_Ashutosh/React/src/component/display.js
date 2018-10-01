import React, { Component } from 'react';


class Display extends Component {

    ondelete(index)
    {
        this.props.delete2Input(index);
    }

  render() {
      var i=-1;
      let tableContents = this.props.input2Display.map(
          ()=>{
              return <div><tr><td>Name:</td><td>{this.props.input2Display[++i].name}</td></tr>
                       <tr>  <td>Email:</td><td>{this.props.input2Display[i].email}</td></tr>
                        <tr> <td>Mobile:</td><td>{this.props.input2Display[i].mobile}</td></tr>
                        <tr> <td>Address:</td><td>{this.props.input2Display[i].add}</td></tr>
                        <tr> <td>Description/Purpose:</td><td>{this.props.input2Display[i].purpose}</td></tr>
                        <tr> <td>Date of Visit:</td><td>{this.props.input2Display[i].date}</td>
                        <td><input type="button" value="Delete" class="btn btn-success btn-block" onClick={this.ondelete.bind(this,i)}/></td></tr>
              
                        </div>
          }
      )
    return (
      <div className="App" class="container">
       
        <table class="table table-striped table-bordered ">
            <tbody>
                {tableContents}
            </tbody>
        </table>
 
      </div>
    );
  }
}

export default Display;