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
    : 'border border-black self-start rounded-e-lg rounded-tl-lg bg-[#ababab] bg-opacity-[17]';
  const chatHeadClasses = isSpeaker
    ? 'bg-[#00B6A6] text-black'
    : 'bg-black text-white';

  return (
    <div className={`flex items-end ${isSpeaker ? 'justify-start ' : 'justify-end '} ${FontManrope.className}`}>
      {isSpeaker && (
        <div className={`rounded-full h-8 w-8 flex items-center justify-center mr-2 ${chatHeadClasses}`}>
          {chatHead}
        </div>
      )}
      <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 text-sm font-bold text-opacity-60 ${bubbleClasses}`}>
        <h1 className={`text-base font-extrabold ${isSpeaker && 'text-[#24837B]'} `}>{userName}</h1>
        <p>{message}</p>
      </div>

    {!isSpeaker && (
        <div className={`rounded-full h-8 w-8 flex items-center justify-center ml-2 ${chatHeadClasses}`}>
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
    { text: 'Hello, how are you?', isSpeaker: false, userName: 'Sam' },
    { text: 'I am fine, thank you!', isSpeaker: true, userName: 'Bob' },
  ];

  return (
    <div className="space-y-2 w-[541px] bg-[#F6F6E6] border-2 border-[#000] border-opacity-10 rounded-tr-xl rounded-tl-xl">
        <div className="border-b-2 p-4 ">
            {messages.map((msg, index) => (
                <ChatBubble key={index} message={msg.text} isSpeaker={msg.isSpeaker} userName={msg.userName} />
            ))}
        </div>
        <div className="row-start-2 h-[160px] px-[57px] py-[30px]">
            <h1 className={`${FontSpaceMono.className} text-base font-bold mb-[5px]`}>LINEAR SCALE</h1>
            <p className={`${FontManrope.className} text-base font-bold opacity-60 mb-[16px]`}>Rate Bob’s sentiment from 1 (negative) to 5 (positive)</p>
            <Slider min={0} max={0} step={0} initialValue={0} onChange={function (value: number): void {
                  throw new Error('Function not implemented.');
              } } />
      </div>
    </div>
  );
};

export default ChatComponent;