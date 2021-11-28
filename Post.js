import axios from "axios";

import React,{ Component } from "react";

export default class Post extends Component{
    state={
        posts:[],
        postObject:{
            title:"",
            body: ""
        }
    }
    onchangeHandler=(event)=>{
        const{name,value}=event.target;
        const postObjectCopy=this.state.postObject;
        postObjectCopy[name]=value;
        this.setState({postObject:postObjectCopy})
    }
    onFormSubmitClick=(event)=>{
     event.preventDefault();
     console.log(this.state);

     axios.post("https://jsonplaceholder.typicode.com/posts", this.state.postObject).then((response)=>{
         console.log(response);
         this.fetchData();
         alert("Created");
         this.setState({
            postObject:{
                title:"",
                body: "",
                userId:1
            }
         })
     }
     
     );
    }



    onDeleteClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/"+id).then((response)=>{
            console.log(response);
            this.fetchData();
            alert("Delete")
        });
    }

    render(){
        return(
            <>
             <h1> Its Post</h1>
             <form onSubmit={this.onFormSubmitClick}>
                 <lable>Title</lable>
                 <input
                 name="title"
                 value={this.state.postObject.title}
                 onChange={this.onchangeHandler}
                 />
                     <lable>Body</lable>
                 <input
                 name="body"
                 value={this.state.postObject.body}
                 onChange={this.onchangeHandler}
                 />
                 <button type="submit">Submit</button>

             </form>
             {this.state.posts.map((posts,index)=>(<div key={index}>
                  <div>  {index+1}.{posts.title}</div><br/>
                <button onClick={()=>{ this.onDeleteClickHandler(posts.id)}}> Delete</button>

                 </div>
             ))}
            </>
        )
    }





    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            console.log(response.data);
            this.setState({ posts: response.data });

        });
    }
}