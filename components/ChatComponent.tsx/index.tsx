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
        <div className={`rounded-full h-8 w-8 font-bold flex items-center justify-center mr-2 ${chatHeadClasses}`}>
          {chatHead}
        </div>
      )}
      <div className={`max-w-[350px] px-4 py-2 text-sm font-bold text-opacity-60 ${bubbleClasses} `}>
        <h1 className={`text-base font-extrabold ${isSpeaker && 'text-[#24837B]'} `}>{userName}</h1>
        <p className={`text-opacity-60 text-black`}>{message}</p>
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
    <div className="space-y-2 w-[541px] bg-[#F6F6E6] border-2 border-[#000] border-opacity-10 rounded-xl mt-4">
        {/* <div className="border-b-2 p-4 ">
            {messages.map((msg, index) => (
                <ChatBubble key={index} message={msg.text} isSpeaker={msg.isSpeaker} userName={msg.userName} />
            ))}
        </div> */}
        <div className="row-start-2 h-[160px] px-[57px] py-[30px] rounded-br-lg">
            <h1 className={`${FontSpaceMono.className} text-base font-bold mb-[5px]`}>LINEAR SCALE<span className=' text-red-500'>*</span></h1>
            <p className={`${FontManrope.className} text-base font-bold opacity-60 mb-[16px]`}>Rate Bob’s sentiment from 1 (negative) to 5 (positive)</p>
            <Slider
                min={1}
                max={5}
                step={1} // Changed step from 5 to 1 to allow values between 1 and 5
                initialValue={1}
                onChange={handleSliderChange}
                showSections
            />
        </div>
    </div>
  );
};

export default ChatComponent;