import NormalProps from "./NormalProps"

export default(props)=>{

    return(
        <>
        <h1>New Increment</h1>
        Value={props.value}
        <button onClick={props.onClickHandler}>Increment</button>
        </>
    )
}