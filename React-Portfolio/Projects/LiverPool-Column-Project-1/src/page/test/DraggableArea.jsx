/* eslint-disable no-unused-vars */
import React from 'react';
import { useDrop } from 'react-dnd';

const ItemType = {
  BOX: 'box',
};

const DroppableArea = () => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemType.BOX,
    drop: (item, monitor) => console.log(`Dropped item: ${item.id}`),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        height: '200px',
        width: '200px',
        border: '1px solid black',
        backgroundColor: isOver ? 'brown' : 'coral',
      }}
    >
      Drop here
    </div>
  );
};

export default DroppableArea;