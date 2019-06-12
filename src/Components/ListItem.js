import React, { Component } from 'react'


export class ListItem extends Component {
    render() {
        // console.log(this.props)
        return (
            <li>{this.props.title}  {this.props.age}</li>
        )
    }
}

export default ListItem
