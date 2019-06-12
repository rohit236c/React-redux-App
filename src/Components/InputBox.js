import React, {Component} from 'react';
import {connect} from 'react-redux';


export class InputBox extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            activeUser:null
        }

        this.id = 0;
    }

    handleChange = (e)=>{
       console.log(e.target.value)
        let activeUser = {};
       if(this.state.activeUser){
         activeUser = {...this.state.activeUser};
         activeUser.name = e.target.value;
       }else{
        // let id = this.id;
        activeUser['id'] = this.id;
        activeUser.name = e.target.value
       }

       this.setState({
        activeUser
       })
    }

    handleInput = () =>{
        console.log(this.props)
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
        let {activeUser} = this.state;
        let name = '';

        if(activeUser){
            name = activeUser.name;
        }

        console.log(activeUser)

        return (
            <div>
                <input type="text" placeholder="name" value={name} onChange={this.handleChange}/>
                <br/>
                {/* <input type="number" placeholder="age" value={age} onChange={this.handleChange}/> */}
                <br/>
                <button type="submit" onClick={this.handleInput}>submit</button>
            </div>
        )
    }
}
export const mapStateToProps = (state) => {
    return {todos: state.todos};
}

export const mapDispatchToProps = dispatch => {
    return {
        ADD : (task)=>dispatch({type:'ADD',val:8}),
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(InputBox)
