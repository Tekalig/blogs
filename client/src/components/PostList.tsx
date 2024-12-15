import  { useState, useEffect } from "react";
import {  axiosPost } from "../api/api";
import NewComment from "./NewComment";

interface Post {
    id: string;
    data: {
        title: string;
        content: string;

    };
}

export default function PostList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosPost.get("/posts");
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts();
    }, []);

  
  return (
    <>
    <div>Posts</div>
    <div className="grid grid-cols-2 gap-4">
        {posts.map((post:Post ) => (
            <div key={post.id} className="border p-4 my-2">
                <h2 className="text-xl font-bold">{post?.data.title}</h2>
                <p>{post?.data.content}</p>
                <hr className="my-4" />
                <NewComment postId={post.id} />
            </div>
        ))}
    </div>
      </>
  )
}
