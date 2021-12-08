import { useState } from "react"

export default()=>{


//const [value,setValue]=setArr


const [value,setValue]=useState(0);
const [newValue,setNewValue]=useState(0);

    const onClickHandler=()=>{
        setValue(value+1);
    }

    const onNewClickHandler=()=>{
        setNewValue(newValue+1);
    }

    const onDecreaseClickHandler=()=>{
        setValue(value-1);
    }
    return(
        <>
        <h1>value: {value}</h1>
        <button onClick={onClickHandler}>Increase</button>
        <h1>New Click : {newValue}</h1>
        <button onClick={onNewClickHandler}>New Increase</button>
     
        <button onClick={onDecreaseClickHandler}>Decrease</button>
        </>
    )
}

