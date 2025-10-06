import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();


// function helloWOrld(){
//   return <h1>Hello from Component</h1>
// }

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<MyComponent />);

//JSX
//Embedding Expressions in JSX
// function MyComponent(){
//   // const name = "Rishi Harish";
//   const name = 2+5;
//   return <h2>Hello {add(1, 6)}</h2>;
// }

//Javascript in JSX
function add(x, y){
  return x+y;
}

//Dynamic Attributes
function MyComponent(){
  const link = "https://piyushgarg.dev";
  return <a href={link}>Click Me</a>;
  
}