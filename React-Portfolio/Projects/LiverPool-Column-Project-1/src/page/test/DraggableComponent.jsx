/* eslint-disable react/prop-types */
import { useDrag } from 'react-dnd';

const ItemType = {
  BOX: 'box',
};

const DraggableComponent = ({ id }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.BOX,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '16px',
        margin: '4px',
        backgroundColor: 'blueviolet',
        cursor: 'move',
      }}
    >
      Drag me
    </div>
  );
};

export default DraggableComponent;