import { FontManrope, FontSpaceMono } from '@/utils/typography';
import React from 'react';
import Slider from '../Slider';

type ChatMessageProps = {
  message: string;
  isSpeaker: boolean;
  userName: string;
};

const ChatBubble: React.FC<ChatMessageProps> = ({ message, isSpeaker, userName }) => {
  const chatHead = userName.charAt(0).toUpperCase();
  const bubbleClasses = isSpeaker
    ? 'self-end rounded-e-lg rounded-tl-lg border border-black bg-[#00B6A6] bg-opacity-10'
    : 'border border-black self-start rounded-e-lg rounded-tl-lg bg-[#ABABAB] bg-opacity-15';
  const chatHeadClasses = isSpeaker
    ? 'bg-[#00B6A6] text-white'
    : 'bg-black text-white';

  return (
    <div className={`flex items-start ${isSpeaker ? 'justify-start ' : 'justify-end '} ${FontManrope.className} mb-[19px]`}>
      {isSpeaker && (
        <div className={`mr-2 flex size-8 items-center justify-center rounded-full font-bold ${chatHeadClasses}`}>
          {chatHead}
        </div>
      )}
      <div className={`max-w-[350px] px-4 py-2 text-sm font-bold text-opacity-60 ${bubbleClasses} `}>
        <h1 className={`text-base font-extrabold ${isSpeaker && 'text-[#24837B]'} `}>{userName}</h1>
        <p className={`text-black text-opacity-60`}>{message}</p>
      </div>

    {!isSpeaker && (
        <div className={`ml-2 flex size-8 items-center justify-center rounded-full ${chatHeadClasses}`}>
          {chatHead}
        </div>
      )}
    </div>
  );
};

// Usage example within your component
const ChatComponent: React.FC = () => {
  // Example messages
  const messages = [
    { text: 'Hello! What were you up to this morning?', isSpeaker: false, userName: 'Sam' },
    { text: 'I was playing with my dogs. I love my dogs! They keep me company and make me happy.', isSpeaker: true, userName: 'Bob' },
    { text: 'That’s so fun! How many dogs do you have?', isSpeaker: false, userName: 'Sam' },
    { text: '3', isSpeaker: true, userName: 'Bob' },
  ];

    // Function to handle slider value changes
    const handleSliderChange = (value: number) => {
        // Handle the slider value change here
        // For example, you could set the value to the state or pass it to another component
        console.log(value); // Just logging it for now
      };
    
  return (
    <div className="mt-4 w-[541px] space-y-2 rounded-xl border-2 border-black border-opacity-10 bg-[#F6F6E6]">
        <div className="border-b-2 p-4 ">
            {messages.map((msg, index) => (
                <ChatBubble key={index} message={msg.text} isSpeaker={msg.isSpeaker} userName={msg.userName} />
            ))}
        </div>
    </div>
  );
};

export default ChatComponent;