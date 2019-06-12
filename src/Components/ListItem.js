import React, { Component } from 'react'


export class ListItem extends Component {
    render() {
        
        return (
            <li onClick = {()=>this.props.handleUpdate(this.props.id)}>{this.props.title}  </li>
        )
    }
}

export default ListItem
