import { FontManrope } from '@/utils/typography';
import { useDrag, useDrop } from 'react-dnd';

const DraggableItem: React.FC<{
  id: string;
  content: string;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}> = ({ id, content, index, moveItem }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'ITEM',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'ITEM',
    hover(item: { id: string; index: number }) {
      if (item.index !== index) {
        moveItem(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <>
      <div
        ref={(node) => {
          if (node !== null) {
            drag(drop(node));
          }
        }}
        style={{
          opacity: isDragging ? 0.5 : 1,
          width: '100%',
          height: '45px',
        }}
        className="mb-2 flex cursor-grab items-center border-2 border-black bg-ecru-white p-2"
      >
        <img src="./draggable-icon.svg" /> {/* Drag icon */}
        <p className={`${FontManrope.className} text-base font-bold`}>{content}</p>
        <div
          style={{
            marginLeft: 'auto',
            background: 'white',
            color: 'black',
            border: '2px solid black',
            padding: '0 4px',
          }}
          className=" flex h-[32px] w-[38px] cursor-pointer items-center justify-center text-center text-sm font-bold"
        >
          {index + 1}
        </div>
      </div>
    </>
  );
};

export default DraggableItem;
