/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { fetchPostTest } from "../util/http";
import { useRef } from "react";

function TestPage() {

  const inputRef = useRef(null);
  const textRef = useRef(null);

  const { mutate } = useMutation({
    mutationFn: fetchPostTest
  });

  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const allData = {
      title : formData.get('title'),
      content : formData.get('content')
    }
    mutate(allData);
    inputRef.current.value = ''
    textRef.current.value = ''
  }

  return (
    <>
      <h1></h1>

      <div className="max-w-4xl mx-auto mt-10 mb-20 p-6 bg-slate-600 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Write a New Post
        </h1>
        <form onSubmit={(e)=>submitHandler(e)} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-white"
            >
              Title
            </label>
            <input
              type="text"
              className="bg-white text-slate-950 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your title"
              required
              id="title"
              name="title"
              ref={inputRef}
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-lg font-medium text-white"
            >
              Content
            </label>
            <textarea
              rows="10"
              className="bg-white h-128 text-slate-950 h-96 mt-1 mb-5 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your content here..."
              required
              id="content"
              name="content"
              ref={textRef}
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TestPage;
