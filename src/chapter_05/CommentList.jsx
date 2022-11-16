import React from "react";
import Comment from "./Comment";

const comments = [
	{
		name: "joonhan",
		comment: "Hello, I'm joonhan",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9TkJlvVvM3LXzll7NCrCK-ZfiBmSnjxtcCpb3q4u0g&s"
	},
	{
		name: "hanjoon",
		comment: "Hello, I'm hanjoon",
		img: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
	},
]

const CommentList = (props) => {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<Comment name={comment.name} comment={comment.comment} img= {comment.img} />
				)
			})}
		</div>
	)
}

export default CommentList;