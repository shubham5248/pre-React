import { Component } from "react";
import { PersonConsumer } from "./PersonContext";


export default class ContextConsumerChild4 extends Component{
    render(){
        return(
            <>
            <h1>In ContextConsumerChild4</h1>
            <PersonConsumer>
                {
                    (value)=>{return(<>
                        <h1>Hii My name is {value.name}, my age is {value.age}, login id is {value.loginId}, company name is {value.company} and training taken by Ankur Sir is {value.underTraining}  </h1>
                   </>
                    )}
                }
            </PersonConsumer>
          
            </>
        )
    }
}