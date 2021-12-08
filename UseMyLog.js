import { useEffect } from "react"

export default (value)=>{

    useEffect(()=>{
        console.log( value);
        //API call to log in ay server side
    },[value]
    )
}