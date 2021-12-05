import React,{Component} from "react";
import Course from "./Course";
import CourseList from "./CourseList";

export default class CourseInformation extends Component{
    render(){
        return(
            <>
            <div className="col-md-4"><Course/></div>
            <div className="col-md-8"><CourseList/> </div>
            </>
        )
    }
}