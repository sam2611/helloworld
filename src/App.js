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
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Countertwo from './components/Countertwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/useContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

 
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
     {/* <Form/> */}
     {/* <LifecycleA/> */}
     {/* <FragmentDemo/> */}
     {/* <Table/> */}
     {/* <ParentComp/> */}
     {/* <RefsDemo/> */}
     {/* <FocusInput/> */}
     {/* <FRParentInput/> */}
     {/* <PortalDemo/>  */}
      {/* <ErrorBoundary>  catch the error and display the fall back ui */}
     {/* <Hero heroName="Batman"/> */}
     {/* </ErrorBoundary> */}

     {/* <ErrorBoundary> */}
     {/* <Hero heroName="Superman"/> */}
     {/* </ErrorBoundary> */}
     
     {/* <ErrorBoundary> */}
     {/* <Hero heroName="Joker"/> */}
     {/* </ErrorBoundary> */}

     {/* <ClickCounter name= "sakshi"/> */}
     {/* <HoverCounter/>  */}
     {/* <ClickCounterTwo/> */}
     {/* <HoverCounterTwo/> */}
     {/* RENDER PROP */}
    {/* in react it is possible to use a prop whose value is a function to controll what is being rendered */}
    {/* sharing code between component using prop whose value is a function */}
     {/* <User render={(isLoggedIn)=> isLoggedIn? 'Sakshi': 'Guest'}/> */}

     {/* <Countertwo render={(count, incrementcount)=> 
        (<ClickCounterTwo count={count} incrementcount={incrementcount}/>)}
     /> */}

      {/* <Countertwo render={(count, incrementcount)=> 
        (<HoverCounterTwo count={count} incrementcount={incrementcount}/>)}
     /> */}
    {/* <UserProvider value="Sakshi"> */}
    {/* <ComponentC/> */}
    {/* </UserProvider> */}
    {/* <PostList/> */}
    <PostForm/>
    </div> 
  );
}

export default App;
