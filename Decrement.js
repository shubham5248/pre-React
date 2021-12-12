export default(props)=>{
    return(
        <>
        <h1>Decrement</h1>
        Value:{props.value}
        <button onClick={props.onClickHandler}>Decrement</button>
        </>
    )

}