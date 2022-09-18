import logo from './logo.svg';
import './App.css';
import ClassCounter from './Component/ClassCounter';
import AnotherHook from './AnotherHook';
import HookCounterTwo from './HookCounterTwo';
import HookCounterThree from './HookCounterThree';
import HookCounterFour from './HookCounterFour';
import ClassCounterOne from './ClassCounterOne';
import HookCounterOne from './HookCounterOne'
import ClassMouse from './ClassMouse';
import HookMouse from './HookMouse';
import MouseContainer from './MouseContainer';
import IntervalClassCounter from './IntervalClassCounter';
import IntervalHookCounter from './IntervalHookCounter';
import DataFetching from './DataFetching';

function App() {
  return (
    <div className="App">
      <DataFetching/>
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/>  */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <AnotherHook/> */}
      {/* <ClassCounter/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
