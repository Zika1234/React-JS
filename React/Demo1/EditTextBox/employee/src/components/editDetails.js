import React, { Component } from 'react';

class EditDetails extends Component {
  render() {

    return (
      <div >
        <form >
          <div>
              <label>Employee Name: </label>
              <input type="text" value={this.props.nametoPass.FName}  ></input>
          </div>
           <div>
              <label>Employee Last Name: </label>
              <input type="text" value={this.props.nametoPass.LName}  />
          </div>
          <div>
                <input type="submit" value="Submit" />
            </div>
            </form>
      </div>
    );
  }
}

export default EditDetails;