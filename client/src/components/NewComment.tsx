import { useState } from 'react';
import { axiosComment } from '../api/api';

interface NewCommentProps {
    postId: string;
    // author: string;
}

export default function NewComment(NewCommentProps: NewCommentProps) {
    const [comment, setComment] = useState("");

    const handleCreateComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axiosComment.post(`/posts/comment`, {
                postId: NewCommentProps.postId,
                comment: comment,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }

  return (
    <>
          <div>New Comment</div>
          <form onSubmit={handleCreateComment}>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">Comment</label>
                    <input onChange={handleCommentChange} value={comment} type="text" id="comment" placeholder="Enter comment" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
    </>
  );
}

