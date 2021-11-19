import logo from './logo.svg';
import './App.css';
import MyFirstComponent from "./MyFirstComponent.js";

import MySecondComponent from './MySecondComponent';
import Props from './PropsComponent';
function App() {
  const name1="Shubham";
  const name2="Shripad";
  const name3 = "Lakhan";
  const age1=28;
const age3=26;



  return (
    
    <div>
      
      {/* <h1>Hello {name && name.length ? name : "World"}</h1>
    <h2>{1+2}</h2> */}
    {/* <Props name={name1} age={23}/> */}
    {/* <MyFirstComponent name={name2} age={age1}> <h2>It is childern having type= react-element</h2> </MyFirstComponent>
    <MySecondComponent name= {name3} age={age3}/> */}
    {/* <MyFirstComponent > <h2>MyFirstComponent called From App</h2></MyFirstComponent>
    <MySecondComponent ><h2> MySecondComponent called From App</h2></MySecondComponent> */}

    <MyFirstComponent parentcomponent={"App"}/>
    <MySecondComponent parrentcomponent ={"App"}/>
    </div>
     
  );
}
export default App;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );