const initialState = {
    todos : [],

}

const reducers = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                todos : state.todos.concat(state.todos)
            }
        case 'Delete':
            return{
                ...state,
                todos : state.todos.slice(action.payload,1)
            }

            
    }
    return state ;

}


export default reducers;