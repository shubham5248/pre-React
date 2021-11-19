

import MyFirstChild from "./MyFirstChild";
import MySecondChild from "./MySecondChild";
import MyThirdChild from "./MyThirdChild";
function MyFirstComponent(props){
    const {name ,age,parentcomponent }= props;
    return(
        <div>
             
        <h2>Its my first component
        <h2>FirstComponent called From {parentcomponent}</h2>
        </h2>
        {/* <h2>Its my friend {name} and age is {age}</h2>
           {children   } */}
        <MyFirstChild parentcomponent={"FirstComponent"}/>
        <MySecondChild  parentcomponent={"FirstComponent"}/>
        <MyThirdChild  parentcomponent={"FirstComponent"}/>
        
      
        {/* <MyFirstChild > <h2>MyFirstChild called by MyFirstComponent</h2>  </MyFirstChild>
          <MySecondChild> <h2>MySecondChild called by MyFirstComponent</h2></MySecondChild>
          <MyThirdChild> <h2>MyThirdChild called by MyFirstComponent</h2></MyThirdChild> */}

        </div>
    );
    
}
export default MyFirstComponent;