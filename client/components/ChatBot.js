/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '../components/UserContext';
import styles from '../styles/ChatBot.module.css';
import zbot from '../public/zbot.png';
import ChatBotMessages from '../data/ChatBotMessages';
import ChatIcon from '@material-ui/icons/Chat';
import Linkify from 'react-linkify';

function ChatBot() {
  const { authUser, loading } = useUser();
  const [messages, setMessages] = useState(ChatBotMessages);
  const [userInput, setUserInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // HELPER FUNCS

  const regexTokens = (input) => {

    const tokens = input
                    .toLowerCase()
                    .split(' ')
                    .filter(function(token) {
                      return token.trim() !== '';
                    });

    return new RegExp(tokens.join('|', 'gim'));

  };


  const processInput = () => {
    const inputRegex = regexTokens(userInput);
    const results = [];

    const responseStrings = ['dashboard', 'doctors', 'hi', 'meaning', 'no', 'thanks', 'yes', 'not bad', 'good'];
    const rez = responseStrings.find((resp) => resp.match(inputRegex));
    const testMe = responseStrings.filter((resp) => resp.match(inputRegex));

    console.log(testMe);

    switch (rez) {
      case undefined:
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "...",
        }]);
        setTimeout(() => {
          setMessages((prevState) => [...prevState.slice(0, prevState.length - 1), {
            type: 'botMessage',
            text: "I didn't quite understand that, could you rephrase your message?",
          }]);
        }, 750)
        break;
      case 'doctors':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "...",
        }]);
        setTimeout(() => {
          setMessages((prevState) => [...prevState.slice(0, prevState.length - 1), {
            type: 'link',
            text: "Here's a link to the list of doctors and services we offer!",
            linkTo: '/searchresults',
            linkName: 'Go to Search'
          }]);
        }, 750);
        break;
      case 'dashboard':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "...",
        }]);
        setTimeout(() => {
          setMessages((prevState) => [...prevState.slice(0, prevState.length - 1), {
            type: 'link',
            text: "Here's a link to your dashboard!",
            linkTo: '/dashboard',
            linkName: 'Go to Dashboard'
          }]);
        }, 750);
        break;
      case 'hi':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "...",
        }]);
        setTimeout(() => {
          setMessages((prevState) => [...prevState.slice(0, prevState.length - 1), {
            type: 'botMessage',
            text: `Hi there, ${authUser.email}! How are you doing?`,
          }]);
        }, 750);
        break;
      case 'meaning':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "...",
        }]);
        setTimeout(() => {
          setMessages((prevState) => [...prevState.slice(0, prevState.length - 1), {
            type: 'botMessage',
            text: '42',
          }]);
        }, 750);
        break;
      case 'yes':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "...",
        }]);
        setTimeout(() => {
          setMessages((prevState) => [...prevState.slice(0, prevState.length - 1), {
            type: 'botMessage',
            text: 'Okay!',
          }]);
        }, 750);
        break;
      case 'no':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "...",
        }]);
        setTimeout(() => {
          setMessages((prevState) => [...prevState.slice(0, prevState.length - 1), {
            type: 'botMessage',
            text: 'Hm sorry, may I help you with anything else?',
          }]);
        }, 750);
        break;
      case 'thanks':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "...",
        }]);
        setTimeout(() => {
          setMessages((prevState) => [...prevState.slice(0, prevState.length - 1), {
            type: 'botMessage',
            text: "You're welcome :D",
          }]);
        }, 750);
        break;
      case 'not bad': case 'good':
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "...",
        }]);
        setTimeout(() => {
          setMessages((prevState) => [...prevState.slice(0, prevState.length - 1), {
            type: 'botMessage',
            text: 'Good to hear!',
          }]);
        }, 750);
        break;
      default:
        setMessages((prevState) => [...prevState, {
          type: 'botMessage',
          text: "...",
        }]);
        setTimeout(() => {
          setMessages((prevState) => [...prevState.slice(0, prevState.length - 1), {
            type: 'botMessage',
            text: "I didn't quite understand that, could you rephrase your message?",
          }]);
        }, 750)
        break;
    }

    return results;

  };

  const todaysDate = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const mm = today.getMonth();
    var dd = String(today.getDate()).padStart(2, '0');
    return `${months[mm]} ${dd}`
  }

  // CHAT UI

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

  // HANDLERS

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
    setMessages((prevState) => [...prevState, {
      type: 'userSentMessage',
      text: userInput,
    }]);
    processInput();
    e.target.value = '';
    setUserInput('');

  }



  // opens Chatbot after a set amount of time
  useEffect(() => {
    setTimeout(() => {
      // setIsOpen(true)
    }, 2000);
  }, [])

  // prevent scrolling if bot is not rendered
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
              if (message.type === 'link') {
                return (
                  <>
                    <div className={styles.botMessage}>
                      <span>{message.text}</span>
                    </div>
                    <div className={styles.linkMessage}>
                      <Link href={message.linkTo}>
                        <a>{message.linkName}</a>
                      </Link>
                    </div>

                  </>
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
      <ChatIcon fontSize="large" className={styles.button} onClick={toggleChat} />
    </div>
  );
}

export default ChatBot;
