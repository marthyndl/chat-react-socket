import React from 'react';
import { withRouter } from "react-router-dom";
import MessagesFinal from '../messages';
import './index.scss';

const Laura = ({ messages, writeMessage, handleSubmit }) => {
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
                  type="text"
                  placeholder='Enter a message'
                  onKeyUp={(event) => handleSubmit(event, true)}/>
            </div>
          </div>
        </div>
        
        <div className="messages">
          <div className="title">
            <h1>Messages</h1>
          </div>
          
          <span>{writeMessage}</span>
          <p>
            <MessagesFinal messages={messages} />
          </p>
        </div>
      </div>
    )
}

export default withRouter(Laura);