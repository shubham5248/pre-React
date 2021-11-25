import { Component } from "react";

export default class LifeCycleUnmount extends Component{
    render(){
        console.log("Render");
        return(
            <>

            </>
        )
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }
}