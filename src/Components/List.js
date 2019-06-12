import React, { Component } from 'react';
import ListItem from './ListItem'
import {connect} from 'react-redux';
import {mapStateToProps} from './InputBox'
import {mapDispatchToProps} from './InputBox'

export class List extends Component {
   
    handleUpdate = (id) =>{
        console.log(id)
        this.props.Update(id)
    }
    render() {
        const {todos} = this.props 
        

        console.log("kfndsijfn")
        return (
            <ul className="ui list">
                {
                      todos.map((todo)=>
                      <ListItem 
                         handleUpdate = {this.handleUpdate}
                          title = {todo.name}
                          id = {todo.id}
                          key = {todo.id}
                      />
                  )
              

                }
              
            </ul>
            
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
