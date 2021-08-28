/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/ChatBot.module.css';
import zbot from '../public/zbot.png';

function ChatBot() {
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
      <div className={styles.chatBody}>
        <div className={styles.date}>August 27</div>
        <div className={styles.chatBubble}>
          <span>
            Hi! Want to chat about Unlocking Wellness? If you have a question, don't be shy!
          </span>
        </div>
        <div className={styles.chatBubble}>
          <span>
            Can you tell me exactly what you're looking for?
          </span>
        </div>
        <div className={styles.responseOption}>
          <span>
            I want to see info about doctors in my area
          </span>
        </div>
        <div className={styles.responseOption}>
          <span>
            I want to see the different categories of care you offer
          </span>
        </div>
        <div className={styles.responseOption}>
          <span>
            Something else
          </span>
        </div>
        {/* <span className={styles.chatBubble}>August 27</span> */}
        <div className={styles.footer}>
          <form className={styles.sendForm}>
            <input type="text" placeholder="Write a message" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
