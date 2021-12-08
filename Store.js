import {createStore}from "redux";


const initialState={
  personList:[],
  courseList:[]
}
const reducer= (state=initialState,action)=>{
    const{type,payload}=action;
       
    const personListCopy=[...state.personList];
    const courseListCopy=[...state.courseList];
    switch(type){
   case "PERSON_ADD":
       const newState={
           ...state,
           personList:personListCopy
       }
       console.log(payload);
       personListCopy.push(payload);
    
       return {
        ...state,
        personList:personListCopy
    };

       case "PERSON_DELETE":
      console.log(payload);
     personListCopy.splice(payload,1);
      alert("Deleted")
      return {
        ...state,
       personList:personListCopy
   };

   case "ADD_COURSE":
       courseListCopy.push(payload);
       return{
        ...state,
           courseList:courseListCopy
       };


       case "COURSE_DELETE":
        console.log(payload);
       courseListCopy.splice(payload,1);
        alert("Deleted")
        return {
            ...state,
         courseList:courseListCopy
     };





   default: return state;
    }

};


const store=createStore(reducer);
export default store;