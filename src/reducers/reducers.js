import uuid from 'uuid';
import * as actionType from '../actions/action';

// return {...state, todos:{data:state.todos.data.map(d=>d.id===state.activeUser.id ? action.task : d), loading:false,error:false}}

const initialState = {
    todos : {
                data:[],
                loading:false, 
                error:false
            },
    activeUser : '',

}

const reducers = (state = initialState, action) => {
    
    switch(action.type){
        case actionType.ADD:
            const newPerson = {
                id : uuid(),
                name : action.task.name,               
            }
             return{
                        ...state,
                       todos:{data : state.todos.data.concat(newPerson)}
                    }
            

        case actionType.Select:
            const newUser = {
                id : action.id,
                
            }
            const User = state.todos.data.find((todo)=>todo.id===newUser.id)
            
            return{
                ...state,
                activeUser : User              
            }   


        case actionType.Edit :  
        let person = [...state.todos.data];        
            if(state.activeUser){
              person.forEach(item => {
                   if(item.id === state.activeUser.id){
                       item.name = action.task.name;        
                   }
               }) 
            }
            // console.log(state.todos)
            return {
                ...state,
                todos:{data: person},     
                               
            }
            
    case actionType.Clear :
            return {
                ...state,
                activeUser: ''
            }
            

    }
    return state ;

}


export default reducers;