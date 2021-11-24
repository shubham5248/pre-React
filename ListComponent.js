import { Component } from "react"

export default class ListComponent extends Component{



    state={
        myList:[]  , 
        input:"", 
   };
   onInputTextChange=(event)=>{
      this.setState({input:  event.target.value})
   }

   onAdd=()=>{
       const copyMyList= this.state.myList;
       copyMyList.push(this.state.input);
       console.log("copyMyList");
       this.setState({myList:copyMyList, input:""});
   };
 
    render(){
   
        return(
            <>
            <h1>My to do list app</h1>
            <input
            value= {this.state.input}
            onChange={this.onInputTextChange}
            />
            <button onClick={this.onAdd}>Add</button>
            {this.state.myList.map((element,index)=> (
                <div key ={index}>
                   
                   <div>{element}</div> </div>
                   
            ) )}

            </>
        )
    }

}
