import React,{Component} from "react";
import { connect } from "react-redux";
 class Course extends Component{
state={
    course:"",
    fees:0
}

onValueChangeHandler=(event)=>{
    const{name,value}=event.target;
    this.setState({[name]:value})
}

OnSubmitClickHandler=(event)=>{
    event.preventDefault();
    this.props.addCourse(this.state);
}

    render(){
        return(
            <>
              <h1>InCourse</h1>
               <form onSubmit={this.OnSubmitClickHandler}>
                   <div className="md-3">
                   <label >Course</label>
                   <input className="form-control"  name="course" value={this.state.course} onChange={this.onValueChangeHandler}/><br/>
                  </div>
                  <div className="md-3">
                   <label>Fees</label>
                   <input className="form-control"  name="fees" value={this.state.fees} onChange={this.onValueChangeHandler}/><br/>
                   </div>
                   <button className="btn btn-success" type="submit">Submit</button>

               </form>
           
            </>
        )
    }
}

const mapStateToProps=()=>{
    return{
      
    }

}
const mapDispatchToProps=(dispatch)=>{
      return{
        addCourse:(payload)=>dispatch({type:"ADD_COURSE", payload:payload})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Course);