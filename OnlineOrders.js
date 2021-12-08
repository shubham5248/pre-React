import { useState } from "react";
import OnlineOrderChild from "./OnlineOrderChild";

const OnlineOrders =()=>{
  
    const status =[
        "OrderPlaced",
        "Pending",
        "Preparing",
        "OutForDelivery",
        "Delivered"
    ];

    const[value, setValue]=useState(0);
    const onClickHandler=()=>{
        setValue(value+1);

    }

    return(
        <>
        <h1>Current Status : {status[value]}</h1>
        <button on onClick={onClickHandler}>Next Status</button>
        <OnlineOrderChild onClickHandler={onClickHandler}/>
        </>
    )
}
export default OnlineOrders;