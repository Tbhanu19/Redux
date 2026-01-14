 import { createStore } from "redux";

const initialState = { 
    balance :0,
    fullName:"",
    Mobile:null,
};

function Account(state = initialState, action) {
    switch (action.type){
        case "deposit":
            return {...state,balance:state.balance + +action.payload};
        case "withdraw":
            return {...state,balance:state.balance - +action.payload};
        case "nameUpdate":
            return{...state,fullName:action.Payload};
        case "mobileUpdate":
            return{...state,Mobile:action.Payload};  

        case "reset":
            return initialState;
                
        default:
           return state; 
    }
            
}

const store = createStore(Account);

export default store;

