import uuid from 'uuid'
// return {...state, todos:{data:state.todos.data.map(d=>d.id===state.activeUser.id ? action.task : d), loading:false,error:false}}

const initialState = {
    todos : {data:[], loading:false, error:false},
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
            state.todos.data.forEach(item => {
                if(item.id===state.activeUser.id){
                    item.name = action.task.name;
                    
                    return {
                        ...state,
                        todos:{data: state.todos.data}
                    }
                }
            })


            // let data = state.todos.data;
            
            

            
            
            else{
                    return{
                        ...state,
                       todos:{data : state.todos.data.concat(newPerson)}
                    }

                }
            
        case 'Update':
            const newUser = {
                id : action.id,
                
            }
            const User = state.todos.data.find((todo)=>todo.id===newUser.id)
            
            return{
                ...state,
                activeUser : User              
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