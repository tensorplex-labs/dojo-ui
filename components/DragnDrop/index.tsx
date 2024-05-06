import { FontManrope } from '@/utils/typography';
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop, DragPreviewImage } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
type DragnDropProps = {
    options: string[];
    onOrderChange: (newOrder: string[]) => void;
  };
  
interface Item {
  id: string;
  content: string;
  type: string;
}



const DragnDrop: React.FC<DragnDropProps> = ({ options, onOrderChange }) => {
  const [items, setItems] = useState(options.map((option, index) => ({ id: `item-${index}`, content: option, type: 'ITEM' })));
  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    setItems(newItems);
  
    // Update the orderObject to reflect the new order of items
    const orderObject = newItems.reduce<{ [key: string]: string }>((acc, item) => {
      acc[item.id] = item.content; // Map the item's id to its content
      return acc;
    }, {});
  
    onOrderChange(Object.values(orderObject)); // Pass the reordered contents as an array
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" py-2.5 ">
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            id={item.id}
            content={item.content}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};
const DraggableItem: React.FC<{ id: string; content: string; index: number; moveItem: (dragIndex: number, hoverIndex: number) => void }> = ({ id, content, index, moveItem }) => {
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
        {/* <DragPreviewImage connect={preview} src="/path/to/drag-preview.png" /> */}
        <div 
          ref={(node) => {
            if (node !== null) {
              drag(drop(node));
            }
          }}          
          style={{ 
            opacity: isDragging ? 0.5 : 1, 
            width: '100%', 
            height: '45px' 
          }} 
          className="flex items-center border-2 border-black bg-[#F6F6E6] p-2 mb-2 cursor-grab"
        >
          <img src="./draggable-icon.svg"/> {/* Drag icon */}
          <p className={`${FontManrope.className} font-bold text-base`}>{content}</p>
          <div style={{ 
            marginLeft: 'auto', 
            background: 'white', 
            color: 'black', 
            border: '2px solid black', 
            padding: '0 4px',
          }}
          className=" w-[38px] h-[32px] text-center font-bold text-sm flex items-center justify-center cursor-pointer"
          >
            {index + 1}
          </div>
        </div>
      </>
    );
  };
export default DragnDrop;
