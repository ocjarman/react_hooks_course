import logo from "./logo.svg";
import "./App.css";
import StateTutorial from "./components/StateTutorial";
import ReducerTutorial from "./components/ReducerTutorial";
import EffectTutorial from "./components/EffectTutorial";

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
    </div>
  );
}

export default App;
