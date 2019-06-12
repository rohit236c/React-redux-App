import uuid from 'uuid'

const initialState = {
    todos : [],
    activeUser : '',

}

const reducers = (state = initialState, action) => {
    
    switch(action.type){
        case 'ADD':
            
            const newPerson = {
                id : uuid(),
                name : action.task.name,
               
            }
            if(state.activeUser)
            state.todos.forEach(item => {
                if(item.id===state.activeUser.id){
                    item.name = action.task.name;
                    return {
                        ...state,
                        todos: state.todos
                    }
                }
            })
            
            else{
                    return{
                        ...state,
                        todos : state.todos.concat(newPerson)
                    }

            }
            
        case 'Update':
            const newUser = {
                id : action.id,
                
            }
            const User = state.todos.filter((todo)=>todo.id===newUser.id)
            
            return{
                ...state,
                activeUser : User[0]               
            }   
        // case 'Edit' :
        //     const newUser = {
        //         name:action.name,
        //         id : action.id
        //     } 
        //     return{
        //         ...state,

        //     }


    }
    return state ;

}


export default reducers;