import React from 'react'
let count = 0;
const Prop_State_Component_example = (Props_Example) => {
    const {title, description, print}=Props_Example.Assignment;
    const increment = () => {
        count++;
        console.log(count);
    }
    const decrement = () => {
        count--;
        console.log(count);
    }
  return (
    <div className='Prop_State_Component_example'>
        <h1>Click the buttons given below to Increment Or Decrement the values.</h1>
        <button className='button' onClick={increment}>increment</button>
        <span> count : {count} </span>
        <button className='button' onClick={decrement}>decrement</button><br />
        <p>Title : {title}</p>
        <p>Description : {description}</p>
        <p>Print : {print}</p>
    </div>
  )
}

export default Prop_State_Component_example