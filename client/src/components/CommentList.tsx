import { useEffect, useState } from "react"
import { axiosComment } from "../api/api";

interface CommentListProps {
    postId:string
}

interface Comment {
    id:string,
    comment:string
}
export default function CommentList(CommentListProps:CommentListProps) {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        const fetchComment = async () => {
        try {
            const response = await axiosComment.get(`posts/${CommentListProps.postId}/comments`);
            setComments(response.data[0].data)
        }catch (error) {
            console.log(error)
        }
    }
        fetchComment();
    }, [])

  return (
    <div className="px-2">
        <p>{comments.length > 0 ? comments.length:'No'} comments</p>

         <ul>
            {
                comments.map((comment:Comment)=>(
                    <li key={comment.id} className="p-2 list-disc list-inside">{comment.comment}</li>
                ))
            }
         </ul>
    </div>
  )
}
