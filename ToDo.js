import axios from "axios";
import { Component } from "react";

export default class ToDo extends Component{
    state={
        posts :[]
    }
    onDeleteClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/todos"+id).then((response)=>{
            console.log(response);
            this.fetchData();
            alert("Delete")
        });
    }
    render(){

        return(
            <>
             <h1> Its ToDo</h1>
             {this.state.posts.map((posts,index)=>(
                 <div key={index}>
                <div>{index+1}.{posts.title}</div> <br/>
                <button on onClick={this.onDeleteClickHandler(posts.id)}>Delete</button>
                 </div>
             ))}
            </>
        )
    }
    componentDidMount(){
        this.fetchData();
    }

    
    fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            console.log(response.data);
            this.setState({ posts: response.data });
        });
    }
}