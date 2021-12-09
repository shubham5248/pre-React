import axios from "axios";
import { useEffect, useState } from "react"

export default ()=>{

   const[userList ,setUserList]= useState([]);
   const[name,setName]=useState("");
   const [userName,setUserName]=useState("");
   const[email,setEmail]=useState("");

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
    const onSubmitClickHandler=(event)=>{
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users" ,{name,userName,email,id:1}).then((response)=>{
            console.log(response.data);
            alert("Added");
             fetchData();

             setName("");
             setUserName("");
             setEmail("");
        })
    }

    const onDeleteClickHandler=(id)=>{
       axios.delete("https://jsonplaceholder.typicode.com/users/" +id).then((response)=>{
           console.log(response.data);
           alert("Deleted");
           fetchData();
       })
    }


    // const onEditClickHandler=(id)=>{
    //     userList.find(user)=>(user.id==id);

    // }

   
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
      <button type="submit">Submit</button>
      </form><br/>

      <table class="table table-dark table-hover">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>USERNAME</th>
                  <th>EMAIL</th>
                  <th>STREET</th>
                  <th>SUITE</th>
                  <th>CITY</th>
                  <th>ZINCODE</th>
                  <th>LAT</th>
                  <th>LAN</th>
                  <th>Option</th>

              </tr>
          </thead>


          <tbody>

              {userList.map((user,index)=>{
                  return(
                <tr key ={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.suite}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.zipcode}</td>
                    <td>{user.address.geo.lat}</td>
                    <td>{user.address.geo.lng}</td>
                    <td><button onClick={onDeleteClickHandler}> Delete</button></td>
                    {/* <td><button onClick={}>Edit</button></td> */}

               
                </tr> 
                  )
              })}
             
          </tbody>
      </table>

        </>
    )
}