/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/ChatBot.module.css';
import zbot from '../public/zbot.png';
import ChatBotMessages from '../data/ChatBotMessages';

function ChatBot() {
  const [messages, setMessages] = useState(ChatBotMessages);

  const messageScroll = () => {
    const lastMessage = document.getElementById('chatBody').lastElementChild;
    lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  const handleUserClick = (option) => {
    switch (option) {
      case 'providers':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "Here's a link to our Provider Search page!",
        }]);
        askForUserInput();
        break;
      case 'specialties':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: 'Here are the different certifications that we service: ',
        }]);
        askForUserInput();
        break;
      case 'yes':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: 'Happy to have been of service!',
        }]);
        break;
      case 'no':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "You're needy lol",
        }]);
        break;
      default:
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "You're needy lol",
        }]);
        break;
    }
  };

  const askForUserInput = () => {
    setMessages((prevState) => [...prevState, {
      type: 'userMessage',
      text: "Yes",
      option: 'yes'
    }, {
      type: 'userMessage',
      text: "No",
      option: 'no'
    }]);
  }

  useEffect(() => {
    messageScroll();
  }, [messages]);

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
        <div id="chatBody" className={styles.chatBody}>
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
