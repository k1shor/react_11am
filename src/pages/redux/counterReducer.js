const initialData = {
    counter: 0
}

export const counterReducer = (state=initialData, action) => {
    switch(action.type){
        case "INCREASE_COUNT":
            return {counter: ++state.counter}
        
        default:
            return state
    }
}

// state -> variable objects
// action -> events that update state variables

