import { useState } from "react";
import { axiosPost } from "../api/api";

export default function NewPosts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosPost.post("/posts", {
        title,
        content,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  return (
    <div>
        <h1>New Posts</h1>
        <form onSubmit={handleCreatePost}>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input onChange={handleTitleChange} type="text" id="title" placeholder="Enter title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="body" className="block text-gray-700 text-sm font-bold mb-2">Body</label>
                <textarea onChange={handleContentChange} id="body" rows={3} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
    </div>
  )
}
