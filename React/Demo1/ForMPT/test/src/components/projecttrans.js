import React, { Component } from 'react';
import ProjectItems from './projectitem';

class ProjectTrans extends Component {

    onDelete(id)
    {
         console.log(id);
    this.props.deleteElement(id);
    }

    render(){
            let projectItem;

            projectItem= this.props.trans.map(
                (items)=>{
                    return (
                        <ProjectItems itemTrans= {items} deleteElement= {this.onDelete.bind(this)}/>
                    )
                }
            )
    
    return (
            <div >
                <h1>Next Page</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                        </tr>
                    </thead>
                    </table>
                {projectItem}
            </div>
    );
}

}
export default ProjectTrans;