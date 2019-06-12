import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from './loader'


export class InputBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            person : [],
            activeUser:null,
            isEditable : true,
            loading : false
        
        }
      
       
    }

    handleChange = (e)=>{
        let activeUser = {};
       
       
                if(this.props.activeUser){
                    activeUser = {...this.state.activeUser};
                    activeUser.name = e.target.value;                  
                   
            }
            else{
                        activeUser.name = e.target.value                       
            }

            this.setState({
                activeUser : activeUser,              
               
            })
            
    }

  

   
   
   
    handleInput = () =>{
        this.setState({
            loading:true
        })
        
        setTimeout(
        ()=>{
            this.setState({
                loading:false
            })        
        this.props.ADD(this.state.activeUser)
        },1000)

       

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
            this.state.isEditable=false     
        }
        if(activeUser){
            // console.log('check');
            name = activeUser.name;
         
        }
       
     
        if(this.state.loading){
            return <Loader/>
        }
        
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
    return {
        todos: state.todos,
        activeUser : state.activeUser   
    };
}

export const mapDispatchToProps = dispatch => {
    return {
        ADD : (task)=> dispatch({type:'ADD',task}),
        Update : (id)=>dispatch({type:'Update',id})
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(InputBox)
