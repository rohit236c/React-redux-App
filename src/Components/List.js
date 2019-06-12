import React, { Component } from 'react';
import ListItem from './ListItem'
import {connect} from 'react-redux';
import {mapStateToProps} from './InputBox'
import {mapDispatchToProps} from './InputBox'

export class List extends Component {
    // constructor(props){
    //     super(props)
    //     // console.log(this.props)
    // }

    render() {
        const {todos} = this.props 

        return (
            <ul>
                {
                      todos.map((todo,id)=>
                      <ListItem 
                          title = {todo.name}
                          age = {todo.age}
                          key = {id}
                      />
                  )
              

                }
              
            </ul>
            
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
