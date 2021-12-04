import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import NewCounter from './NewCounter';

function App() {
  return (
    <div className="App">
<h1>{<Counter/>}</h1>
<h1>{<NewCounter/>}</h1>
    </div>
  );
}

export default App;
