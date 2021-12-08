import { useState } from "react"
import withOrder from "./withOrder";

const OnlineOrder =(props)=>{
    const arr=[
        "OrderPlaced",
        "Pending",
        "Preparing",
        "OutForDelivery",
        "Delivered"
    ];

//     const[value,setValue]=useState(0);
    
    
//    const onClickHandler=()=>{
//         setValue(value+1)
//     }

    return(
        <>
        <h1>Online order status</h1>
        <h2>{arr[props.value]}</h2>
        <button onClick={props.onClickHandler}>Status</button>
        </>
    )
}
export default withOrder(OnlineOrder);