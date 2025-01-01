// Date: 03/20/2021

interface CommentListProps {
    comments: Comment[],
}

interface Comment {
    id:string,
    comment:string
}
export default function CommentList({comments}:CommentListProps) {

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
