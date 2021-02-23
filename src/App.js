import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';

function App() {

  const nayoks = ['Razzak', 'Jasim', 'Mannaaa', 'Solemon Shah'];
  const product = [
    {name: 'Showes', price:'$99.99'},
    {name: 'Backpack', price:'$150'},
    {name: 'Jacket', price:'$233'}
  ]

  return (
    <div className="App">
      <header className="App-header">

        <Users></Users>

        <Counter></Counter>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            product.map(pd => <li>{pd.name}</li>)
          }
        </ul>
        
        {
          product.map(pd => <Products productResult={pd}></Products>)
        }

        {/* <Products productResult ={product[0]}></Products>
        <Products productResult ={product[1]}></Products>
        <Products productResult ={product[2]}></Products> */}

        <Person name='Rubel' nayika='Moushumi'></Person>
        <Person name='Jasim' nayika='Notun'></Person>
        <Person name='Mannaaa' nayika='Chompa'></Person>

      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic Users : {users.length} </h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
    
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleCount = () => setCount(count + 1);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={handleCount}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  )
}

function Products(props){
  var productStyle = {
    color: 'grey',
    border:'5px solid green',
    backgroundColor: 'cyan',
    margin:'5px',
    padding:'5px',
    borderRadius: '5px',
    height: '200px',
    width: '300px',
    
  }

  const btnStyle ={
    backgroundColor: 'grey',
    color:'yellow',
    borderRadius: '5px',
    padding:'5px',
    width:'100px',
    margin:'3px'
  }

  const {name, price} = props.productResult;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button style={btnStyle}>Buy Now</button>
      <button style={btnStyle}>Buy Now</button>
    </div>
  )
}



function Person(props){
  var personStyle = {
    color: 'cyan',
    border:'5px solid green',
    backgroundColor: 'tomato',
    margin:'5px',
    padding:'5px',
    borderRadius: '5px',
    height: '150px',
    width: '300px',
  }
  return (
    <div style={personStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Nayika: {props.nayika}</h3>
    </div>
  )
}

export default App;
