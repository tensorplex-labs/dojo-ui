import React from 'react';
import ChatBubble from './ChatBubble';

const messages = [
  { text: 'Hello! What were you up to this morning?', isSpeaker: false, userName: 'Sam' },
  {
    text: 'I was playing with my dogs. I love my dogs! They keep me company and make me happy.',
    isSpeaker: true,
    userName: 'Bob',
  },
  { text: 'That’s so fun! How many dogs do you have?', isSpeaker: false, userName: 'Sam' },
  { text: '3', isSpeaker: true, userName: 'Bob' },
];

const ChatComponent: React.FC = () => {
  return (
    <div className="mt-4 w-[541px] space-y-2 rounded-xl border-2 border-black/10 bg-ecru-white">
      <div className="border-b-2 p-4 ">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.text} isSpeaker={msg.isSpeaker} userName={msg.userName} />
        ))}
      </div>
    </div>
  );
};

export default ChatComponent;
