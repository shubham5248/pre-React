import { useEffect, useState } from "react"
import OnlineStatus from "./OnlineStatus";
import UseMyLog from "./UseMyLog";

export default ()=>{
        const [value, setValue] =useState(0);
        const [newValue, setNewValue] =useState(0);

        //   UseMyLog(value);
        //   UseMyLog(newValue);

        const userStatus= OnlineStatus(value);

        const onClickHandler=()=>{
            setValue(value+1);
        };

        const onNewClickHandler=()=>{
            setNewValue(newValue+1);
        };


        useEffect(()=>{
            console.log("render");
        },[value]); 
        
                                                   //[] execute once after the componenet is render. 
        useEffect(()=>{
            console.log("New Value");
            return()=>{
                console.log("Clean up");
            }
        },
      
        [newValue]);                           //and if given the [value] as an argument it will
                                            // it will work as an update function and always print when value is updated
        return(
            <>


            <h1> User Status : {userStatus}</h1>
            <h1>Value :{value}</h1>
            <button onClick={onClickHandler}>ClickMe</button>

            <h1>New Value :{newValue}</h1>
            <button onClick={onNewClickHandler}>ClickMe</button>
        </>
        )
};