import './App.css';
import ReactDOM from 'react-dom';
import React,{useState,useReducer} from 'react';
const initialState={
  Applecount:0,
  Orangecount:0,
  Mangocount:0,
  Kiwicount:0,
  Totalcount:0
}
function Cart(state,action){
  switch(action.category){
    case 'AppleAdd':
      return {...state,Applecount:state.Applecount+1};
    case 'OrangeAdd':
      return {...state,Orangecount:state.Orangecount+1};
    case 'MangoAdd':
      return {...state,Mangocount:state.Mangocount+1};
    case 'KiwiAdd':
      return {...state,Kiwicount:state.Kiwicount+1};
    case 'AppleRemove':
      return {...state,Applecount:Math.max(state.Applecount - 1, 0)};
    case 'OrangeRemove':
      return {...state,Orangecount:Math.max(state.Orangecount - 1, 0)};
    case 'MangoRemove':
      return {...state,Mangocount:Math.max(state.Mangocount - 1, 0)};
    case 'KiwiRemove':
      return {...state,Kiwicount:Math.max(state.Kiwicount - 1, 0)};
    default:
      throw new console.error("Not Found");
      
  }
}
function Cartone(){
  const[state,dispatch]=useReducer(Cart,initialState)
  const totalCount = state.Applecount + state.Orangecount + state.Mangocount + state.Kiwicount;
  return (
    <div>
    <h1>SHOPPING CART</h1>
    <div className="App">
      <div className="row">
        <div className="row1">
          <h1>Apple</h1>
          <button onClick={()=>dispatch({category:'AppleAdd'})}>+</button>
          <button onClick={()=>dispatch({category:'AppleRemove'})}>-</button>
        </div>
        <div className="row2">
          <h1>Orange</h1>
          <button onClick={()=>dispatch({category:'OrangeAdd'})}>+</button>
          <button onClick={()=>dispatch({category:'OrangeRemove'})}>-</button>
        </div>
        <div className="row3">
          <h1>Mango</h1>
          <button onClick={()=>dispatch({category:'MangoAdd'})}>+</button>
          <button onClick={()=>dispatch({category:'MangoRemove'})}>-</button>
        </div>
        <div className="row4">
          <h1>Kiwi</h1>
          <button onClick={()=>dispatch({category:'KiwiAdd'})}>+</button>
          <button onClick={()=>dispatch({category:'KiwiRemove'})}>-</button>
        </div>
      </div>
      <div className="col">
        <div className="col1">
        <h1>Add to Cart</h1>
        <p>Apple:{state.Applecount}</p>
        <p>Orange:{state.Orangecount}</p>
        <p>Mango:{state.Mangocount}</p>
        <p>Kiwi:{state.Kiwicount}</p>
        <h2>Total Count:{totalCount}</h2>
        </div>
      </div>
    </div>
    </div>
  );
}

ReactDOM.render(<Cartone/>,document.getElementById('root'));
export default Cartone;
