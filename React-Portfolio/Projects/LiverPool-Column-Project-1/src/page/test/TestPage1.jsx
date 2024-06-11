import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableComponent from "./DraggableComponent";
import DraggableArea from './DraggableArea'

function TestPage1() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <DraggableComponent id="1" />
        <DraggableArea />
      </DndProvider>
    </>
  );
}

export default TestPage1;
