import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
	return (
		<div>
			<Comment name={"joonhan"} comment={"Hello I'm joonhan"}/>
			<Comment name={"hanjoon"} comment={"Hello I'm hanjoon"}/>
		</div>
	)
}

export default CommentList;