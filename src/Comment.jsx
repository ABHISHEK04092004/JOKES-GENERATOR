//shree ganeshay namah

import {useState} from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

function Comment(){

let [comments,setComments]=useState([{
  username:"@shreeji",
  remarks:"great job!",
  rating:5,
},
]);

let addNewComment=(comment)=>{
  setComments((currComments)=>[...currComments,comment]);
  console.log("added new comment");
 
};

  return(
<>
    <div>
      <h1>All Comments </h1>
      {comments.map((comment,idx)=>(
        <div className="comment" key={idx}>
        <span>{comment.remarks}</span>
        &nbsp;
        <span>(rating={comment.rating})</span>
        <p>{comment.username}</p>
</div>
      ))}
    </div>
    <hr></hr>
    <CommentsForm addNewComment={addNewComment}/>
    </>
  )
}

export default Comment;