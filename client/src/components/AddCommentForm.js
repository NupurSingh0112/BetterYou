import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");
  const addComments = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comments`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };
  return (
    <form className=' shadow-lg rounded px-8 pt-6 pb-8 mb-4'>
      <h3 className='text-2xl font-bold mb-4 text-red-900'>Add a comment</h3>
      <p className=" w-[50%] mb-5 text-md text-red-800 font-serif"> your opinions are valuable to us. Please share your thoughts on other topics you would like us to cover!</p>
      <label className='block text-red-700 text-sm font-bold mb-2'>
        Name :
      </label>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <label className='block text-red-800 text-sm font-bold mb-2'>
        Comment :
      </label>
      <textarea
        rows='4'
        cols='50'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <button
        onClick={() => addComments()}
        className='bg-red-900 hover:bg-red-600 text-white font-bold py-2 px-4 rouded focus:outline-none focus:shadow-outline'
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
