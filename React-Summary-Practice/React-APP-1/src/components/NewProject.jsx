import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

// eslint-disable-next-line react/prop-types
function NewProject({ onAdd, onCancel }) {

  const modalRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      desc: enteredDesc,
      date: enteredDueDate,
    });
  }

  return (
    <>
    <Modal ref={modalRef} buttonCaption="Button!!">
    <h2 className="text-xl font-bold text-stone-500 my-4">Hello!</h2>
    <p className="text-stone-600 mb-4">Not Entered input</p>
    <p className="text-stone-600 mb-4">Not Entered input</p>
    </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel}>Cancel</button>
          </li>
          <li>
            <button onClick={handleSave}>Save</button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title"></Input>
          <Input ref={descRef} label="Description" textarea></Input>
          <Input type="date" ref={dueDateRef} label="Due Date"></Input>
        </div>
      </div>
    </>
  );
}

export default NewProject;
