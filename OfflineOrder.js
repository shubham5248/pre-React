import { useState } from "react"
import withOrder from "./withOrder";

const OfflineOrder=(props)=>{
const arr=[
    "OrderPlaced",
    "Preparing",
    "Serving",
    "BillPayment"
]
    // const [value,setValue]=useState(0);

    // const onClickHandler=()=>{
    //     setValue(value+1)
    // }
    return(
        <>
        <h1>Offline Order Status</h1>
        <h2>{arr[props.value]}</h2>
        <button onClick={props.onClickHandler}>Status</button>
        </>
    )
}
export default withOrder(OfflineOrder);