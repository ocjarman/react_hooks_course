import "./App.css";
import StateTutorial from "./components/StateTutorial";
import ReducerTutorial from "./components/ReducerTutorial";
import EffectTutorial from "./components/EffectTutorial";
import RefTutorial from "./components/RefTutorial";
import LayoutEffect from "./components/LayoutEffect";

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <LayoutEffect />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
    </div>
  );
}

export default App;
