import { KEY_MESSAGE_SCROLL_HEIGHT } from '@/constants';
import FirstKeyMessageSlide from './FirstKeyMessageSlide';
import SecondKeyMessageSlide from './SecondKeyMessageSlide';
import ThirdKeyMessageSlide from './ThirdKeyMessageSlide';

const KeyMessageSlides = () => (
  <div className="w-full bg-gray-100">
    <FirstKeyMessageSlide />
    <div className={`h-[${KEY_MESSAGE_SCROLL_HEIGHT}px] w-full`}></div>
    <SecondKeyMessageSlide />
    <div className={`h-[${KEY_MESSAGE_SCROLL_HEIGHT}px] w-full`}></div>
    <ThirdKeyMessageSlide />
    <div className={`h-[${KEY_MESSAGE_SCROLL_HEIGHT}px] w-full`}></div>
  </div>
);

export default KeyMessageSlides;
