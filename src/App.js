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
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import UserGreeting from './components/UserGreeting';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
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
     {/* <EventBind/> */}
     {/* <ParentComponent/> */}
     {/* <NameList/> */}
     {/* <UserGreeting/> */}
     {/* <Stylesheet primary={true}/> */}
     {/* <Inline>Inline</Inline> */}
     <Form/>
    </div> 
  );
}

export default App;
