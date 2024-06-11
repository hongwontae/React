import { useMutation } from "@tanstack/react-query";

import { fetchPostHistory } from "../util/http";

function HistoryForm() {
  const { mutate } = useMutation({
    mutationFn: fetchPostHistory,
  });

  function submitHandler(e) {
    e.preventDefault();
    const segData = new FormData(e.target);

    const allData = {
      name: segData.get("name"),
      title: segData.get("title"),
      content: segData.get("content"),
    };

    mutate(allData);
  }

  return (
    <>
      <form onSubmit={submitHandler} className="w-4/5 m-auto">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="w-full"
          name="title"
          required
        ></input>

        <label htmlFor="name">Author</label>
        <input
          type="text"
          id="name"
          className="w-full"
          name="name"
          required
        ></input>

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          className="w-full"
          name="content"
          required
        ></textarea>
        <button type="submit" className="bg-blue-400">Submit Event</button>
      </form>
    </>
  );
}

export default HistoryForm;
