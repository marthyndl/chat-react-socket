import React from 'react'

const index = ({ messages }) => {
    return messages.map((message, index) => {
        return (
          <li key={index}>
            <b  className={(message.from === 'Laura') ? 'italic' : 'oblique' }>{message.from}: {message.body}
                <br />
                <span className="time">Sended by {message.from} at {message.time}</span>
            </b>
          </li>
          );
    });
}

export default index;
