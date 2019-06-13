export const ADD = 'ADD';
export const Select = 'Select';
export const Edit = 'Edit';
export const Clear ='Clear';
export const LoadingHandle = 'LoadingHandle';

export const Add = (task) => ({type:ADD,task})
export const SelectId = (id) =>({type:Select,id})
export const EditItem = (task) => ({type:Edit,task})
export const ClearBox = ()=>({type:Clear})
export const LoadingHandled  = ()=>({type:LoadingHandle})