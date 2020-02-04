import React from 'react';
import { withRouter } from "react-router-dom";
import MessagesFinal from '../messages';
import Header from '../header';
import './index.scss';

const Home = ({ messages, writeMessage, handleSubmit }) => {
    return(
      <div style = {{height:"100vh"}}>
        <div className="contenedor">
          <Header />
          <div className="boxes">
            <div className="lauraBox">
              
              <h1>Laura Chat Box</h1>
              <input
                className='input'
                type="text"
                placeholder='Enter a message'
                onKeyUp={(event) => handleSubmit(event, true)}
              />
            </div>
            <div className="robBox">
            
              <h1>Rob Chat Box</h1>
              <input
                  type="text"
                  placeholder='Enter a message'
                  onKeyUp={(event) => handleSubmit(event, false)}
                />
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

export default withRouter(Home);