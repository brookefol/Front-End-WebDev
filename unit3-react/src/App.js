import MyComponent from "./MyComponent";
import './App.css';
import LoginForm from './LoginForm';
import Greeting from "./Greeting";

function App() {
  let submitted = false;
  let userName = "";
  

  function handleOnSubmit(name){
    submitted = true;
    userName = name;
    console.log(submitted);
  }
  return (
    <div className="App">

      { // ternary operator -- like if for react
        (!submitted) ? <LoginForm onSubmit = {handleOnSubmit}></LoginForm> : <Greeting name = {userName}></Greeting>
      }
      

      
      {/* <h1> Hello React! </h1>
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>
      <MyComponent></MyComponent>


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
