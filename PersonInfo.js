import { Component } from "react";

export default class PersonInfo extends Component{

state={
    Name : "",
    Age : 0,
    Contact :0,
    myList :[]
}

inputTextChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}
onSubmit =(event)=>{
    event.preventDefault();
    console.log(this.state);
}
onAdd=()=>{
  
        const copyMyList= this.state.myList;
        copyMyList.push( <h1>My name is {this.state.Name} My age is { this.state.Age } my contact no is {this.state.Contact} </h1> )
       this.setState({myList:copyMyList, Name:"", Age:"",Contact:""})


    
}


    render(){
        return<>
          <form  onSubmit={this.onSubmit}>

<label>Name :</label>
<input  name={"Name"} value= {this.state.Name} onChange={this.inputTextChange}/><br />
<label>Age :</label>
<input  name={"Age"} value= {this.state.Age} onChange={this.inputTextChange}/><br />
<label>Phone No :</label>
<input  name={"Contact"} value= {this.state.Contact} onChange={this.inputTextChange}/><br />

<button type="submit" onClick={this.onAdd}>Submit</button>
</form>
<h1>My list</h1>
{this.state.myList.map((element,index)=> (
                <div key ={index}>
                   
                   <div>{element}</div> </div>
                   
            ) )}


        </>
    }
}  