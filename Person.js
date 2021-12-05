import React,{Component} from "react";
import { connect } from "react-redux";

 class Person extends Component{
    state={
        name:"",

        age:0,
    }


    onValueChangeHandler=(event)=>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    
    onFormSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props.addPerson(this.state);

    }


    render(){
        return(
            <>
            <h1>Add Person</h1>
            <form onSubmit={this.onFormSubmitHandler}>
                <div className="md-3">
                <label htmlFor="name">Name :</label>
                <input id="name" className="form-control" name="name" value={this.state.name} onChange={this.onValueChangeHandler}></input><br/>
                </div>
                <div className="md-3">
                <label htmlFor="age">Age :</label>
                <input  id="age" className="form-control" name="age" value={this.state.age} onChange={this.onValueChangeHandler}></input><br/>
                 </div>

                <button className="btn btn-success" type="submit">Submit</button>
            </form>
            </>
        )
    }
}

const mapStateToProps =(state)=>{
    return {};
}
const mapDispatchToProps =(dispatch)=>{
    return {
        addPerson: (payload)=>dispatch({type: "PERSON_ADD",payload:payload})
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Person);
