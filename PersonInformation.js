import React,{Component} from "react";
import Person from './Person';
import PersonList from "./PersonList";
export default class PersonInformation extends Component{
    render(){
        return(
            <>
        <h1>In PersonInformation </h1>

        <div className="row">
               <div className="col-md-4"><Person/></div>
               <div className="col-md-8"> <PersonList/></div>
        </div>
       
        </>
        )
    }
}