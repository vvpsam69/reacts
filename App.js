import React,{useState} from "react";
import './App.css';

function App(){
  const initialItems=[
    {id:1, name:'Apple',price:10},
    {id:2, name:'Mango',price:15},
    {id:3, name:'Banana',price:20}
  ]
  const [cart, setCart]=useState([]);
  const [items]=useState(initialItems);

  const addToCart=(items)=>{
    setCart([...cart,items]);
  };

  const removeFromCart=(items)=>{
    const updatedCart=cart.filter((cartItem)=>cartItem.id!==items.id);
    setCart(updatedCart);
  };

  const calculateTotal=()=>{
    return cart.reduce((total, items)=>total + items.price,0);
  };

  return(
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="Items">
        <h2>Available Items</h2>
        <ul>
          {items.map((items)=>(
            <li key={items.id}>
              {items.name}:₹ {items.price}
              <button onClick={()=>addToCart(items)}>Add to Cart</button>
            </li>
          ))};
        </ul>
      </div>
      <div className="Cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((items)=>(
            <li key={items.id}>
              {items.name}:₹ {items.price}
              <button onClick={()=>removeFromCart(items)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total:₹{calculateTotal()}</h3>
      </div>
    </div>
  )
}       

export default App;


