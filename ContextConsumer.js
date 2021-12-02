import { Component } from "react";
import ContextConsumerChild1 from "./ContextConsumerChild1";



export default class ContextConsumer extends Component{
    render(){
        return(
            <>
            <h1>In contextconsumer</h1>
            <ContextConsumerChild1/>
            </>
        )
    }
}