import { Component } from "react";

export default class LifeCycle extends Component{
 constructor(){
     super();
     console.log("Inside constructor");
     // always base class constructor gets invoked
     //then the constructor of child class gets invoked
    }

    render(){
        return <h1>Inside Render</h1>
    }

    componentDidMount(){
        console.log("Inside componentDidMount");
        //invokes at last afyer rendering
    }
}