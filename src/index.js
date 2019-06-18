import React from 'react';
import ReactDom from 'react-dom';
// import thunk from 'redux-thunk' ;

import App from './App';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/reducers';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const thunkMiddleWare  = () =>{
    
    return({dispatch,getState,extraArguments})=>next=>action =>{
        
        if (typeof action === 'function') {
            return action(dispatch, getState,extraArguments);
          }
      
          return next(action)
        
    }
}
const logger  = () =>{
   
    return next => {
        return action => {
           
            next(action)
                 
        }
    }
}
// const thunk1 = thunkMiddleWare();
// thunk1.withExtraArgument =  thunkMiddleWare;




const store = createStore(reducers,composeEnhancers(applyMiddleware(logger,thunkMiddleWare())));
ReactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))



// return action => {
//     console.log("which action  " + action.type)
//     if(action.type  === 'LoadingHandle' ){
//         setTimeout( ()=>{
//             result  = next(action);
//             console.log('next state',store.getState() )
       
//       },1000)
//     }
 
//   return result;
// }