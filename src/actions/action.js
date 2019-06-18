

export const ADD = 'ADD';
export const Select = 'Select';
export const Edit = 'Edit';
export const Clear ='Clear';
export const LoadingHandle = 'LoadingHandle';

// const apiCall = (task)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout (()=>{
//             resolve (task)
//         },1000)
//     })
// }

//here we create an action//
const AddList = (task) =>{
    return {type:ADD,task}
}


//here async task happens// 
export const Add = (task) => {  
    return dispatch => {    
        setTimeout ( () => {
            dispatch(AddList(task)) 
        },1000)
    }      
}
      



export const SelectId = (id) =>({type:Select,id})
export const EditItem = (task) => ({type:Edit,task})
export const ClearBox = ()=>({type:Clear})
export const LoadingHandled  = ()=>({type:LoadingHandle})