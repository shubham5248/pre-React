import { Component } from "react";

export default class FormComponent extends Component{
    state={
        Age:0,
        Name :"",
    };
    // onNameTextChange =(event)=>{
    //     this.setState({Name : event.target.value})
    // };
    // onAgeTextChange =(event)=>{
    //     this.setState({Age : event.target.value})
    // };


    onValueChangeHandler=(event)=>{
        console.log(event.target.name);
        this.setState({[event.target.name]:event.target.value});
    }
    onSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);

    }



    render(){
     
        return<>
        <h1>Person Details</h1>
        <form onSubmit={this.onSubmitClick}>

            <label>Name :</label>
            <input  name={"Name"} value= {this.state.Name} onChange={this.onValueChangeHandler}/><br />
            <label>Age :</label>
            <input  name={"Age"} value= {this.state.Age} onChange={this.onValueChangeHandler}/><br />
            <button type="submit">Submit</button>
        </form>
        </>
    }
}