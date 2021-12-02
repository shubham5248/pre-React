import { Component } from "react";
import ContextConsumerChild3 from "./ContextConsumerChild3";


export default class ContextConsumerChild2 extends Component{
    render(){
        return(
            <>
            <h1>In ContextConsumerChild2</h1>
             <ContextConsumerChild3/>
          
            </>
        )
    }
}