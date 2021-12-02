import logo from './logo.svg';
import './App.css';
import { PersonProvider } from './PersonContext';
import ContextConsumer from './ContextConsumer';

function App() {
  const name="Shubham"
  return (
    <div className="App">
   <PersonProvider value={{name:"Shubham" , age :23 ,loginId: "salunkhe051" , company:"Neova", underTraining:"React Js"}}>

     <ContextConsumer/>
   </PersonProvider>
    </div>
  );
}

export default App;
