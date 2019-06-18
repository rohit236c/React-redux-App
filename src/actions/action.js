

export const ADD = 'ADD';
export const Select = 'Select';
export const Edit = 'Edit';
export const Clear ='Clear';
export const LoadingHandle = 'LoadingHandle';

const apiCall = (task)=>{
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            resolve (task)
        },1000)
    })
}


export const Add = (task) =>{
   
       return {type:ADD,task}
   
    
}
      



export const SelectId = (id) =>({type:Select,id})
export const EditItem = (task) => ({type:Edit,task})
export const ClearBox = ()=>({type:Clear})
export const LoadingHandled  = ()=>({type:LoadingHandle})