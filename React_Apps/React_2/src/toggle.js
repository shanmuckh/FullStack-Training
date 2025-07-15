import React, { useState } from 'react'
const Toggle = () => {
    const [isOn, setIsOn] = useState(true);
    const [inputText, setInputText] = useState('');
    const friends = ['Sai Pranay', 'Pavan', 'Shannu', 'Bhargav', 'Karthik', 'Asad', "Mani", 'Srikar']
    return (
        <div>
            <h2>toggle message : {isOn ? 'ON' : 'OFF'}</h2><br/>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
            <hr/>
            Enter your name: <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
            <h2>Mirror Text is : {inputText.split("").reverse().join("")}</h2>
            <hr/>
            <ul style={{textAlign: 'left'}}>
                {friends.map((friend, index) => (
                    <li key={index}>{friend}</li>
                ))}
            </ul>
        </div>
    )
}
export default Toggle