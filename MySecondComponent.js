// function MySecondComponent(){
//     return(
//     <h3>MySecondComponent</h3>
//     );
// }
// export default MySecondComponent;


// const MySecondComponent=()=>{
//     return ( <h3>MySecondComponent</h3>);
// }
// export default MySecondComponent;


import MyFirstChild from "./MyFirstChild";
import MySecondChild from "./MySecondChild";
import MyThirdChild from "./MyThirdChild";
export default(props)=>{
    const {name,age ,parentcomponent}=props;
   return (
       <>
   {/* <h3>MySecondComponent</h3> */}
   {/* { <h3>My friend {name} his age is {age}</h3> */}
   <MyFirstChild parentcomponent={"SecondComponent"}/>
        <MySecondChild  parentcomponent={"SecondComponent"}/>
        <MyThirdChild  parentcomponent={"SecondComponent"}/>
 {
 <h2>SecondComponent called From {parentcomponent}</h2>
/* <MyFirstChild CalledBy={"MyFirstComponent"}> <h2>MyFirstChild called by MySecondComponent</h2>  </MyFirstChild>
          <MySecondChild> <h2>MySecondChild called by MySecondComponent</h2></MySecondChild>
          <MyThirdChild> <h2>MyThirdChild called by MySecondComponent</h2></MyThirdChild> */}
  </>
   );
};
