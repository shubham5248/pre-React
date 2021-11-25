import { Component } from "react";
import LifeCycleUnmount from "./LifeCycleUnmount";

export default class LifeCycleUpdate extends Component{

    state={
        showText:true

    }
 onButtonClick=()=>{
     this.setState({showText: !this.state.showText})
 }

    render(){
        return(
            <>

            {this.state.showText && <><h1>Showing My text on your requirement</h1>
            <LifeCycleUnmount/>
            </>}
              <button onClick={this.onButtonClick}>Toogle</button>
            </>
        )
    }

    componentDidUpdate(){
        console.log("CompunentDidUpdate");
    }
}