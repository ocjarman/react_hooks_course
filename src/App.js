import logo from "./logo.svg";
import "./App.css";
import StateTutorial from "./components/StateTutorial";
import ReducerTutorial from "./components/ReducerTutorial";
function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
    </div>
  );
}

export default App;
