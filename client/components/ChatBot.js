/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/ChatBot.module.css';
import zbot from '../public/zbot.png';
import ChatBotMessages from '../data/ChatBotMessages';
import ChatIcon from '@material-ui/icons/Chat';

function ChatBot() {
  const [messages, setMessages] = useState(ChatBotMessages);
  const [userInput, setUserInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen((prevState) => !prevState);
  }

  const messageScroll = () => {
    const lastMessage = document.getElementById('chatBody').lastElementChild;
    lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
  };

  const addLink = () => {

  }

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

  const handleUserClick = (option) => {
    switch (option) {
      case 'providers':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "Here's a link to our Provider Search page!",
        },
        {
          type: 'botMessage',
          text: 'Was this helpful for you?',
        }]);
        askForUserInput();
        break;
      case 'specialties':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: 'Here are the different certifications that we service: ',
        },
        {
          type: 'botMessage',
          text: 'Mental Health, Gender Affirming Care, Herbal Healing',
        },
        {
          type: 'botMessage',
          text: 'Was this helpful for you?',
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

  const handleUserFormSubmit = (e) => {
    e.preventDefault();
    if (userInput === '') { return; }
    e.target.value = '';
    setUserInput('');
    setMessages((prevState) => [...prevState, {
      type: 'userSentMessage',
      text: userInput,
    }]);
  }

  const todaysDate = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const mm = today.getMonth();
    var dd = String(today.getDate()).padStart(2, '0');
    return `${months[mm]} ${dd}`
  }

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true)
    }, 2000);
  }, [])

  useEffect(() => {
    if (!isOpen) { return; }
    messageScroll();
  }, [messages, isOpen]);

  return (
    <div className={styles.body}>
      { isOpen ? <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.botBio}>
            <div className={styles.icon}>
              <Image className={styles.picture} src={zbot} alt="Picture of ZBot" />
            </div>
            <span className={styles.botName}>ZBot</span>
          </div>

        </div>
        <div className={styles.messages}>
          <div className={styles.date}>{todaysDate()}</div>
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
              if (message.type === 'userSentMessage') {
                return (
                  <div className={styles.userSentMessage}>
                  <span>{message.text}</span>
                </div>
                )
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
            <form onSubmit={(e) => handleUserFormSubmit(e)} className={styles.sendMessageInput}>
              <input value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" placeholder="Write a message" />
              {/* <input value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" placeholder="Write a message" /> */}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div> : ''}
      <ChatIcon onClick={toggleChat} />
    </div>
  );
}

export default ChatBot;
