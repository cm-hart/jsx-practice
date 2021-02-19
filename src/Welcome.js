import React from 'react';
import './App.css'

const Welcome = () => {
    const time = new Date().toLocaleTimeString();
    return(
        <div className="App">  
            <h1>Hello! The time is {time}</h1>
            <p>My name is catie and I am here to learn a coding language!</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Welcome