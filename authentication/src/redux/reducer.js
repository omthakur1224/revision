
const todoReducer=(store,action)=>{
    const {type,payload}=action;
    switch(type){
        case ADD_TODO:
            return {...store}
        default:
            return store
    }
}