import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Functionclick from './components/Functionclick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman"/>
      <p>This is Children props</p>
      <Greet name="Clark" heroName="Superman"/>
      <button>Action</button>
      <Greet name="Diana" heroName="Wonder Woman"/>

     <Welcome name="Bruce" heroName="Batman"/>
     <Welcome name="Clark" heroName="Superman"/>
     <Welcome name="Diana" heroName="Wonder Woman"/>  */}
     {/* <Hello/> */} 
     {/* <Message/> */}
     {/* <Counter/> */}
     {/* <Functionclick/> */}
     {/* <ClassClick/> */}
     <EventBind/>
    </div> 
  );
}

export default App;
