/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/ChatBot.module.css';
import zbot from '../public/zbot.png';
import ChatBotMessages from '../data/ChatBotMessages';

function ChatBot() {
  const [messages, setMessages] = useState(ChatBotMessages);
  const handleUserClick = (option) => {
    switch (option) {
      case 'providers':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "Here's a link to our Provider Search page!",
        }]);
        break;
      case 'specialties':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: 'Here are the different certifications that we service: ',
        }]);
        break;
      default:
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "You're needy lol",
        }]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.botBio}>
          <div className={styles.icon}>
            <Image className={styles.picture} src={zbot} alt="Picture of ZBot" />
          </div>
          <span>ZBot</span>
        </div>

      </div>
      <div className={styles.messages}>
        <div className={styles.date}>August 27</div>
        <div className={styles.chatBody}>
          {
          messages.map((message) => {
            if (message.type === 'botMessage') {
              return (
                <div className={styles.botMessage}>
                  <span>{message.text}</span>
                </div>
              );
            }
            return (
              <div
                role="button"
                tabIndex="-1"
                onKeyDown={() => {}}
                onClick={() => handleUserClick(message.option)}
                className={styles.userMessage}
              >
                <span>{message.text}</span>
              </div>
            );
          })
        }
        </div>
        <div className={styles.footer}>
          <form onSubmit={(e) => e.preventDefault()} className={styles.sendMessageInput}>
            <input type="text" placeholder="Write a message" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
