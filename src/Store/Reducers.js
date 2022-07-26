import * as actions from './Actions'

export const Todo=(state=actions.todoInitialState,action)=>{
    switch (action.type){
        case actions.ADD_TODO:
            return [...state,action.todo]

        case actions.DELETE_TODO:
            return state.filter((todo,index)=>index !== action.index)
        default:
            return state
    }
}