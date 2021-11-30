import axios from "axios";
import { Component } from "react";

export default class ToDo extends Component{
    state={
        toDo:[],
        isEditMode :false,
        toDoObject:{
            title:"",
            completed: ""
        }
    }
    resetState(){
   this.setState({
    toDo:[],
    isEditMode :false,
    toDoObject:{
        title:"",
        completed: ""
    }
   })

    }
    onchangeHandler=(event)=>{
        const{name,value}=event.target;
        const toDoObjectCopy=this.state.toDoObject;
        toDoObjectCopy[name]=value;
        this.setState({toDoObject:toDoObjectCopy})
    }
    onFormSubmitClick=(event)=>{
     event.preventDefault();
     console.log(this.state);
     if(this.state.isEditMode){
         axios.put("https://jsonplaceholder.typicode.com/todos/"+this.state.toDoObject.id,this.state.toDoObject).then((response)=>{
             console.log(response);
             this.fetchData();
             alert("Upadated");
             this.resetState();
         })
     }else{
        axios.post("https://jsonplaceholder.typicode.com/todos", this.state.toDoObject).then((response)=>{
            console.log(response);
            this.fetchData();
            alert("Created");
            this.setState({
                toDoObject:{
                   title:"",
                   body: "",
                   userId:1
               }
            })
        }
        
        );
     }


    }



    onDeleteClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/todos/"+id).then((response)=>{
            console.log(response);
            this.fetchData();
            alert("Delete")
        });
    }


    onEditClickHandler=(id)=>{
      const editObject= this.state.toDo.find((toDo)=>toDo.id ===id);
      if(editObject){
          this.setState({toDoObject:editObject ,isEditMode:true})
      }
        };


        onCancleClickHandler=(event)=>{
            event.preventDefault();
                this.setState({
                    toDoObject:{
                       title:"",
                       body: "",
                       userId:1
                   },
                   isEditMode: false,
                })
            }
        
            
            
           
    

    render(){
        return(
            <>
             <h1> Its ToDo</h1>
             <form onSubmit={this.onFormSubmitClick}>
                 <lable>Title</lable>
                 <input
                 name="title"
                 value={this.state.toDoObject.title}
                 onChange={this.onchangeHandler}
                 />
                     <lable>Completed</lable>
                 <input
                 name="completed"
                 value={this.state.toDoObject.completed}
                 onChange={this.onchangeHandler}
                 />
                 <button type="submit">{this.state.isEditMode? "Update":"Submit"}</button>
                 <button onClick={this.onCancleClickHandler}> Cancle</button>
             </form>
             {this.state.toDo.map((toDo,index)=>(<div key={index}>
                  <div>  {index+1}.{toDo.title}</div><br/>
                <button onClick={()=>{ this.onDeleteClickHandler(toDo.id)}}> Delete</button>
                <button onClick={()=>{ this.onEditClickHandler(toDo.id)}}> Edit</button>
           

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
            this.setState({ toDo: response.data });

        });
    }
        }