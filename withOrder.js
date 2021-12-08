import { useState } from "react"

export default(WrappedComponent)=>{
    
    return()=>{
        const [value,setValue]=useState(0);
        const onClickHandler=()=>{
            setValue(value+1)
        }
        return<WrappedComponent value={value} onClickHandler={onClickHandler}/>
    }

        // return(
        //     <>
        //     <h1>OnlineOrder</h1>
        //     <h2>Current Status : {arr[props.value]}</h2>
        //     <button onClick={onClickHandler}>Next Status</button>
        //     </>
        // )

}