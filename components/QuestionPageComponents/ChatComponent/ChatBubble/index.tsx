import { ChatBubbleProps } from '@/types/QuestionPageTypes';
import { FontManrope } from '@/utils/typography';

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isSpeaker, userName }) => {
  const chatHead = userName.charAt(0).toUpperCase();
  const bubbleClasses = isSpeaker
    ? 'self-end rounded-e-lg rounded-tl-lg border border-black bg-primary bg-opacity-10'
    : 'border border-black self-start rounded-e-lg rounded-tl-lg bg-[#ABABAB] bg-opacity-15';
  const chatHeadClasses = isSpeaker ? 'bg-primary text-white' : 'bg-black text-white';

  return (
    <div
      className={`flex items-start ${isSpeaker ? 'justify-start ' : 'justify-end '} ${FontManrope.className} mb-[19px]`}
    >
      {isSpeaker && (
        <div className={`mr-2 flex size-8 items-center justify-center  rounded-full font-bold ${chatHeadClasses}`}>
          {chatHead}
        </div>
      )}
      <div className={`max-w-[350px] px-4 py-2 text-sm font-bold text-opacity-60 ${bubbleClasses} `}>
        <h1 className={`text-base font-extrabold ${isSpeaker && 'text-darkGreen'} `}>{userName}</h1>
        <p className={`text-black text-opacity-60`}>{message}</p>
      </div>

      {!isSpeaker && (
        <div className={`ml-2 flex size-8 items-center justify-center rounded-full ${chatHeadClasses}`}>{chatHead}</div>
      )}
    </div>
  );
};

export default ChatBubble;
