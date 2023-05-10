export const initialState = {
    name: "Ramesh",
    age: 30
}

// type actionType = {
//     type: "CHANGE_NAME",
//     payload: string
// } | {
//     type: "UPDATE_AGE",
//     payload: number
// }

export interface actionType  {
    type: "CHANGE_NAME",
    payload: string
} 

export interface actionTypep {
    type: "UPDATE_AGE",
    payload: number
}


export const reducer = (state: typeof initialState, action:actionType | actionTypep) =>{

    if(action.type === "CHANGE_NAME") {
        return {
            ...state,
            name: action.payload
        }
    }
    if (action.type === "UPDATE_AGE") {
        return {
            ...state,
            age: action.payload
        }
    }
    else {
        return state;
    }

}