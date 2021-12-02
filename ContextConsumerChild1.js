import { Component } from "react";
import ContextConsumerChild2 from "./ContextConsumerChild2";


export default class ContextConsumerChild1 extends Component{
    render(){
        return(
            <>
            <h1>In ContextConsumerChild1</h1>
            <ContextConsumerChild2/>
            </>
        )
    }
}