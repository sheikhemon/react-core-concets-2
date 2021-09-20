import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

// Declare another Component
function ExternalUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props) {
  const userStyle = {
    backgroundColor: 'skyblue',
    color: 'white',
    padding: '20px',
    margin: '20px',
    border: '3px solid blue'
  }
  return (
    <div style={userStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Email: {props.email}</h4>
    </div>
  )
}


// Declare component
function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1)
  const handleClick2 = () => setCount(count - 1)
  /* const newCount = count + 1;
  setCount(newCount)
  console.log('clicked'); */
  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleClick2}>Decrease</button>
    </div>
  )
}

export default App;


// Recap Concept code
/*
  const headerStyle = {
    color: 'blue',
    fontWeight: '700'
  }
  const products = [
    { name: 'iPhone', price: '1000000' },
    { name: 'laptop', price: '2000000' },
    { name: 'camera', price: '3000000' },
    { name: 'Watch', price: '40000' },
  ]
*/
/*
  <h1 style={headerStyle}>React Core concept 2</h1>
  {
    products.map(product => <Product name={product.name} price={product.price}></Product>)
  }
  //--> hardCoded
  <Product name="iPhone" price="1000000" ></Product>
  <Product name="laptop" price="2000000" ></Product>
  <Product name="camera" price="3000000" ></Product>
*/
/*
  function Product(props) {
  const productStyle = {
    border: "2px solid yellow",
    borderRadius: "10px"
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}
*/
