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
function MyComponent(){
  const name = "Rishi Harish";
  return <h2>Hello {name}</h2>;
}
