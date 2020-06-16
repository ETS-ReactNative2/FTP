import React from 'react';
import MessageLogCSS from './messagelog.css';
import { formatTime } from '../../util/time_util';

class MessageLog extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        const messageList = this.props.messages.map((message, i) => (
            <li key={i} className="message-list-item">
                <p className="message-time">
                    {formatTime(message.date)}
                </p>
                <p className="message-text">
                    {message.text}
                </p>
            </li>
        ));
    
        return (
            <div className="messagelog-container">
                <h1 className="message-list-header">Message Log</h1>
                <ul className="message-list">
                    {messageList}
                </ul>
            </div>
        )
    }
}

export default MessageLog;
