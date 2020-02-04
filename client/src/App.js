import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import io from 'socket.io-client';
import Moment from 'moment';
import Rob from './components/rob';
import Laura from './components/laura';
import Home from './components/home';
import './App.css';

const socket = io('http://localhost:5000', {transports: ['websocket'], upgrade: false});

function App() {
  const [messages, setMessages] = useState([]);
  const [writeMessage, setWriteMessage] = useState('');

  useEffect(
    () => {
      socket.on('message', message => {
        console.log('message post server ****', message)
        setMessages((messages) => [message, ...messages])
      });
    }, []
  );

  const handleSubmit = (event, bool) => {
    const body = event.target.value;
    if (body !== null || body !== undefined || body !== '') {
      if (bool === true) {
        setWriteMessage('Laura is writing ...')
      } else {
        setWriteMessage('Rob is writing ...')
      }
    }
    if (body === null || body === undefined || body === '') {
      setWriteMessage('')
    }
    
    if (event.keyCode === 13 && body) {
      var time = Moment(Date()).format('MMMM Do YYYY, h:mm:ss a');
      const message = {
        body,
        from: (bool === true) ? 'Laura' : 'Rob',
        time
      }
      setMessages((messages) => [message, ...messages])
        socket.emit('message', message)
        console.log('message pre server ****', messages)
      
      
      event.target.value = ''
      if (event.target.value === null || event.target.value === undefined || event.target.value === '') {
        setWriteMessage('')
      }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" >
              <Home messages={messages} writeMessage={writeMessage} handleSubmit={handleSubmit} />
            </Route>
            <Route exact path="/laura" >
              <Laura messages={messages} writeMessage={writeMessage} handleSubmit={handleSubmit} />
            </Route>
            <Route exact path="/rob" >
              <Rob messages={messages} writeMessage={writeMessage} handleSubmit={handleSubmit} />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
