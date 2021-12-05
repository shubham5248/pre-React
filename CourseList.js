import React,{ Component } from "react";
import { connect } from "react-redux";

class CourseList extends Component{
    render(){
        return(
            <>
            <h1>CourseList</h1>

            <table className= "table">
                <thead>
                    <tr>
                    <th>Sr.no</th>
                    <th>Course</th>
                    <th>Fees</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.courseList.map((course,index)=>{

                        return(
                            <tr key={index}>
                               <th>{index+1}</th>
                               <th>{course.course}</th>
                               <th>{course.fees}</th>
                               <button onClick={()=>{this.props.deleteByCourseId(index)}}>Delete</button>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
   courseList: state.courseList,
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
   deleteByCourseId:(index)=>dispatch({type:"COURSE_DELETE", payload:index})
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(CourseList)