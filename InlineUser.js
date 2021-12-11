import axios from "axios";
import { useEffect, useState } from "react"

export default ()=>{

   const[userList ,setUserList]= useState([]);
   const[name,setName]=useState("");
   const [userName,setUserName]=useState("");
   const[email,setEmail]=useState("");
   const[userId,setUserId]=useState(0);
   const[isEditMode,setIsEditMode]=useState(false);
   const [selectedUserId, setSelectedUserId]=useState(-1);
   const [editObject, setEditObject]=useState({})
   const [userObject ,setUserObject]=useState({name:"",userName:""})

    const fetchData = ()=>{axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        console.log(response.data);
        if (response && response.data) {
            setUserList(response.data);
        }
    });}
    useEffect(()=>{
        fetchData();
    },[]);



    const onNameChangeHandler=(event)=>{
        setName(event.target.value);
        console.log(name);
     
    }

    const onUserNameChangeHandler=(event)=>{
        setUserName(event.target.value);
     console.log(userName);
    }

    const onEmailChangeHandler=(event)=>{
        setEmail(event.target.value);
     console.log(email);
    }

  const onResetClickHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
   
  };

    const onResetEditRow=()=>{
        setSelectedUserId(-1);
        setEditObject({});
    
      }

    const onSubmitClickHandler=(event)=>{
        event.preventDefault();
        if(!isEditMode){
        axios.post("https://jsonplaceholder.typicode.com/users" ,{name,userName,email,id:1}).then((response)=>{
            console.log(response.data);                             
            alert("Added");
             fetchData();

             setName("");
             setUserName("");
             setEmail("");
        })
    }
// else{
//     if(userId > 0){
//   axios.put("https://jsonplaceholder.typicode.com/users/"+userId, {
//       id: userId,
//       name,
//       userName,
//       email
//   }).then((response)=>{
//       if(response){
//           fetchData();
//           alert("Updated");
//          onResetEditRow();
//       }
//   })
//     }
// }
    }









    const onDeleteClickHandler=(id)=>{
       axios.delete("https://jsonplaceholder.typicode.com/users/" +id).then((response)=>{
        //    console.log(response.data);
        if(response){
            alert("Deleted");
            fetchData();
        }
        
          
       })
    }
  
const onEditObjectHandler=(event)=>{
    const{name, value}=event.target;
    setEditObject({
        ...editObject,
        [name]:value
    })
};
    const onEditClickHandler=(userList)=>{
    //  userList.find(user) = (user.id==id);
    console.log(userList);
    setIsEditMode(true);
   
    setEmail(userList.email);
    setName(userList.name);
    setUserName(userList.username);
    setUserId(userList.id);

    setSelectedUserId(userList.id);
    setEditObject({
        // title: postObject.title,
        // body: postObject.body,
        ...userList
      })

    };
   
    const onReset=(event)=>{
    if(event){
        event.preventDefault();
    }
       setIsEditMode(false);
     setName("");
     setUserName("");
 
    }

    const onUpdateRowHandler=(event)=>{
        event.preventDefault();
        if(event){
            axios.put("https://jsonplaceholder.typicode.com/users/"+userId,{name,userName,id:1}).then((response)=>{
            console.log(response.data);                             
            alert("Updated");
             fetchData();
          onResetEditRow();
           
        })
    }
    }
   
    return(
        <>
      <h1>UserList</h1><br/>

      <form onSubmit={onSubmitClickHandler}>
      <label>Name</label>
      <input name="name"value={name} onChange={onNameChangeHandler}/>
      <label>UserName</label>
      <input name="userName" value={userName} onChange={onUserNameChangeHandler}/>
      <label>Email</label>
      <input name="email" value={email} onChange={onEmailChangeHandler}/>
      <button type="submit">{isEditMode ? "Update": "Submit"}</button>

      {isEditMode&&<button onClick={onReset}>Reset</button>}
      </form><br/>

      <table class="table table-dark table-hover">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>USERNAME</th>
                  {/* <th>EMAIL</th>
                  <th>STREET</th>
                  <th>SUITE</th>
                  <th>CITY</th>
                  <th>ZINCODE</th>
                  <th>LAT</th>
                  <th>LAN</th>
                  <th>Option</th> */}

              </tr>
          </thead>


          <tbody>

              {userList.map((user,index)=>{
                  return(
                <tr key ={user.id}>
                    <td>{user.id}</td>
                    <td>{selectedUserId===user.id?<input name="name" value ={editObject.name} onChange={onEditObjectHandler}/> :user.name}</td>
                    <td>{ selectedUserId===user.id?<input name="username" value ={editObject.username} onChange={onEditObjectHandler}/>: user.username}</td>
                    {/* <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.suite}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.zipcode}</td>
                    <td>{user.address.geo.lat}</td>
                    <td>{user.address.geo.lng}</td> */}


                
                    <td>{selectedUserId===user.id? <button onClick={onUpdateRowHandler}>update</button>:<button onClick={()=>{onDeleteClickHandler(user.id)}}> Delete</button>}</td>
                     <td>{selectedUserId===user.id? <button onClick={onResetEditRow}>Reset</button>:<button onClick={()=>{onEditClickHandler(user)}}>Edit</button> }</td> 

               
                </tr> 
                  )
              })}
             
          </tbody>
      </table>

        </>
    )
}