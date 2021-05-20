
import './App.css';
import Header from './Components/Header'
import Counter from './Components/Counter'
import Work from './Components/Work'

function App() {
  return (
    <div className="App">
      <Header title="To-do App"/>
      <Counter />
      <Work />
    </div>
  );
}

export default App;
