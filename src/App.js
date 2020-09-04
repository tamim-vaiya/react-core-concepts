import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'Shuvo', 'Bappy'];
    const products =[
      {name: 'Photoshop', price: '$90.99'},
      {name: 'illustrator', price: '$99.99'},
      {name: 'PDF Reader', price: '$96.99'},
      {name: 'Premiere El', price: '$296.99'}
    ];
    
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        
        <Person name={nayoks[0]} nayika="Moushumi"></Person>
        <Person name={nayoks[1]} nayika="Shabana"></Person>
        <Person name={nayoks[2]} nayika="Cheka"></Person>
        <Person name={nayoks[3]} nayika="Bobita"></Person>
        
      </header>
    </div>
  );
}

function Counter(props){
  const[count, setCount] = useState(10);
 
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}


function Product(props){
  const productStyle={
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Person (props){
  const personStyle = 
    {
      border:'2px solid yellow',
      margin: '10px',
      padding:"10px 20px"
    }
  return (
  <div style={personStyle}> 
    <h1> Nayok: {props.name}</h1>
  <h3>Hero of {props.nayika}</h3>
  </div>
  )
}

export default App;
