import FirstKeyMessageSlide from './FirstKeyMessageSlide';
import SecondKeyMessageSlide from './SecondKeyMessageSlide';
import ThirdKeyMessageSlide from './ThirdKeyMessageSlide';

const KEY_MESSAGE_SCROLL_HEIGHT = 1200;
const KeyMessageSlides = () => (
  <div className="w-full bg-gray-100">
    <FirstKeyMessageSlide />
    <div className={`w-full`} style={{ height: KEY_MESSAGE_SCROLL_HEIGHT }}></div>
    <SecondKeyMessageSlide />
    <div className={`w-full`} style={{ height: KEY_MESSAGE_SCROLL_HEIGHT }}></div>
    <ThirdKeyMessageSlide />
    <div className={`w-full`} style={{ height: KEY_MESSAGE_SCROLL_HEIGHT }}></div>
  </div>
);

export default KeyMessageSlides;
