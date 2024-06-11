/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { fetchPostTest } from "../util/http";
import { useRef } from "react";
import Modal from "../components/modal/Modal";
import Form from "../components/usage/Form";

function TestPage() {
  const refs = {
    titleRef: useRef(null),
    contentRef: useRef(null),
  };

  const modalRef = useRef(null);

  const { mutate } = useMutation({
    mutationFn: fetchPostTest,
  });

  function submitHandler() {
    const title = refs.titleRef.current.getTitle();
    const content = refs.contentRef.current.getContent();

    const allData = {
      title,
      content,
    };

    mutate(allData);
    refs.titleRef.current.clearTitle();
    refs.contentRef.current.clearContent();
  }

  function ModalShowHandler(e) {
    e.preventDefault();
    modalRef.current.showModal();
  }

  function ModalDownHandler() {
    modalRef.current.close();
  }

  function downHandler(e) {
    e.preventDefault();
    refs.titleRef.current.clearTitle();
    refs.contentRef.current.clearContent();
  }

  return (
    <>
      <Modal
        ref={modalRef}
        onCloseHandler={ModalDownHandler}
        onSucess={submitHandler}
      >
        <div className="text-lg font-medium leading-6 text-gray-900">
          Modal Title
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">This is the modal content.</p>
        </div>
      </Modal>
      <Form modalShow={ModalShowHandler} ref={refs} downHandler={downHandler}>
        Posting Page
      </Form>
    </>
  );
}

export default TestPage;
