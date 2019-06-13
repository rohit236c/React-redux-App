import React, { Component } from 'react';
import ListItem from './ListItem'
import {connect} from 'react-redux';
import {mapStateToProps} from './InputBox'
import {mapDispatchToProps} from './InputBox'

export class List extends Component {
   
    handleSelect = (id) =>{
        
        this.props.Select(id)
    }

    render() {
        const {todos} = this.props 
        return (
            <ul className="ui list">
                {
                      todos.map((todo)=>
                      <ListItem 
                         handleSelect = {this.handleSelect}
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
