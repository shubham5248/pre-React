import {createStore} from "redux";

//initialstate
const initialstate={
    counter:0,
}
//reducer
const reducer=(state=initialstate,action)=>{
   const {type}=action;
//    counter:state.counter+1,
switch(type){
    case "increment":
        return{
            counter:state.counter+1
        };
        case "decrement":
            return{
                counter:state.counter-1
            };

            default:
               return state
                
}








    }


// Store
const store = createStore(reducer);

export default store;