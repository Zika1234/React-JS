import React, { Component } from 'react';

class ProjectItems extends Component {

onDelete(id){
    console.log(id);
    this.props.deleteElement(id);
}

    render(){
        return(
            <div>
                <table>
            
                    <tbody>
                    <tr>
                        <td>{this.props.itemTrans.name}</td>
                        <td>{this.props.itemTrans.password}</td>
                       <td><button type="button" onClick = {this.onDelete.bind(this,this.props.itemTrans.id)}>Delete</button></td>
                    </tr>
                    </tbody>
                    </table>
                </div>
        )
    }
}
export default ProjectItems;