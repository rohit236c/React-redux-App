import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from './loader'
import * as actionTypes from '../actions/action'


class InputBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeUser: null,
            isEditable : true, 
            isLoader : false     
            
        }       

    }


    handleChange = (e)=>{
        let activeUser = {};

             if(this.props.activeUser){
               
                    activeUser = {...this.state.activeUser};
                    activeUser.name = e.target.value;                                    
                   
                }
                else {
                        activeUser.name = e.target.value                       
                     }

            this.setState({
                activeUser : activeUser,              
               
            })
            
    }

  
    
handleInput = () =>{
    
    // this.setState({
    //     isLoader:true
    // })
    this.props.LoadingHandle()
    
   
      if(this.props.activeUser){
                   
            this.props.Edit(this.state.activeUser)       
            this.props.Clear()     
            // console.log(this.props.loading)
        }
        else{
            // console.log("addition")
            this.props.ADD(this.state.activeUser)
            // console.log(this.props.loading)
        }      

        //input box value null here..
        this.setState({
            activeUser:'',          
        })
   
        
}


    componentDidUpdate(prevProps,prevState){
       
        if(this.props.activeUser){
            if(this.props.activeUser.id !== this.state.activeUser.id){
                this.setState({
                    activeUser:this.props.activeUser
                })
            }
        }
    }

   
    

    render() {
             
        let activeUser = this.state.activeUser;
       
        let name = '';
        if(this.props.activeUser && this.state.isEditable){
            activeUser = this.props.activeUser;  
            this.setState({
                isEditable : false
            })   
        }
        if(activeUser){
            name = activeUser.name;         
        }
       
     
        if( this.props.loading ){
            return <Loader/>
        }

        return (
            <div className="ui-grid">
                <input className="ui input"type="text" placeholder="name" value={name} onChange={this.handleChange}/>
                <br/>
                {/* <input type="number" placeholder="age" value={age} onChange={this.handleChange}/> */}
                <br/>
                <button className="ui primary button" type="submit" onClick={this.handleInput}>submit</button>
            </div>
        )
    }
}
export const mapStateToProps = (state) => {
    // console.log(state.todos.loading)
    return {
        todos: state.todos.data,
        loading : state.todos.loading,
        activeUser : state.activeUser   
    };
}

export const mapDispatchToProps = dispatch => {
    // console.log( ADD : (task)=> dispatch(actionTypes.Add(task)))
    return {

        ADD : (task) => dispatch(actionTypes.Add(task)),      
        Select : (id) => dispatch(actionTypes.SelectId(id)),
        Edit   : (task) => dispatch(actionTypes.EditItem(task)),
        Clear  : () => dispatch (actionTypes.ClearBox()),
        LoadingHandle : () => dispatch (actionTypes.LoadingHandled())
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(InputBox)
