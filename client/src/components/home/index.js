import React from 'react';
import { withRouter } from "react-router-dom";
import './index.scss';

const Home = ({ messages, writeMessage, handleSubmit }) => {  

  

  
    const messagesFinal = messages.map((message, index) => {
      return (
        <li key={index}>
          <b  className={(message.from === 'Laura') ? 'italic' : (message.from === 'Rob') ? 'oblique' : '' }>{message.from}: {message.body}
          <br />
          <span className="time">Sended by {message.from} at {message.time}</span>
          </b>
        </li>
        );
    });

    return(
      <div style = {{height:"100vh"}}>
        <div className="contenedor">
          <div className="title">
            <h1>Chat Messages</h1>
          </div>
          <div className="boxes">
            <div className="lauraBox">
              
              <h1>Laura Chat Box</h1>
              <input
              className='input'
                  type="text"
                  placeholder='Enter a message'
                  onKeyUp={(event) => handleSubmit(event, true)}/>
            </div>
            <div className="robBox">
            
              <h1>Rob Chat Box</h1>
              <input
                  type="text"
                  placeholder='Enter a message'
                  onKeyUp={(event) => handleSubmit(event, false)}/>
            </div>
          </div>
        </div>
        
        <div className="messages">
          <div className="title">
            <h1>Messages</h1>
          </div>
          
          <span>{writeMessage}</span>
          <p>{messagesFinal}</p>
        </div>
      </div>
    )
}

export default withRouter(Home);