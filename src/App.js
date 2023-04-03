import "./App.css";
import StateTutorial from "./components/StateTutorial";
import ReducerTutorial from "./components/ReducerTutorial";
import EffectTutorial from "./components/EffectTutorial";
import RefTutorial from "./components/RefTutorial";
import LayoutEffect from "./components/LayoutEffect";
import ImperativeHandle from "./components/ImperativeHandle";
import ContextTutorial from "./components/UseContext/ContextTutorial";
import MemoTutorial from "./components/UseMemo/MemoTutorial";
function App() {
  return (
    <div className="App">
      <StateTutorial />
      <MemoTutorial />
      <ContextTutorial />
      <ImperativeHandle />
      <LayoutEffect />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
    </div>
  );
}

export default App;
