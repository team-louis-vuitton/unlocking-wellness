const ChatBotMessages = [
  {
    type: 'botMessage',
    text: "Hi! Want to chat about Unlocking Wellness? If you have a question, don't be shy!",
  },
  {
    type: 'botMessage',
    text: "Can you tell me exactly what you're looking for?",
  },
  {
    type: 'userMessage',
    text: 'I want to see info about doctors in my area',
    option: 'providers',
  },
  {
    type: 'userMessage',
    text: 'I want to see the different specialized categories of care you offer',
    option: 'specialities',
  },
  {
    type: 'userMessage',
    text: 'Something else',
    option: 'other',
  },
];

export default ChatBotMessages;
