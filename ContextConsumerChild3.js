import { Component } from "react";
import ContextConsumerChild4 from "./ContextConsumerChild4";


export default class ContextConsumerChild3 extends Component{
    render(){
        return(
            <>
            <h1>In ContextConsumerChild3</h1>
            <ContextConsumerChild4/>
            </>
        )
    }
}