import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from './DraggableItem';
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
  const [items, setItems] = useState(
    options.map((option, index) => ({ id: `item-${index}`, content: option, type: 'ITEM' }))
  );

  useEffect(() => {
    setItems(options.map((option, index) => ({ id: `item-${index}`, content: option, type: 'ITEM' })));
  }, [options]);

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    setItems(newItems);

    const orderObject = newItems.reduce<{ [key: string]: string }>((acc, item) => {
      acc[item.id] = item.content;
      return acc;
    }, {});

    onOrderChange(Object.values(orderObject)); // Pass the reordered contents as an array
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" py-2.5 ">
        {items.map((item, index) => (
          <DraggableItem key={item.id} id={item.id} content={item.content} index={index} moveItem={moveItem} />
        ))}
      </div>
    </DndProvider>
  );
};

export default DragnDrop;
