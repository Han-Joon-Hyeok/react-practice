import React from "react";

const styles = {
	wrapper: {
		margin: 8,
		padding: 8,
		display: "flex",
		flexDirection: "row",
		border: "1px solid grey",
		borderRadius: 16,
	},
	imageContainer: {},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	contentContainer: {
		marginLeft: 8,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	nameText: {
		color: "black",
		fontSize: 16,
		fontWeight: "bold"
	},
	commentText: {
		color: "black",
		fontSize: 16,
	}
}

const Comment = (props) => {
	return (
		<div style={styles.wrapper}>
			<div style={styles.imageContainer}>
				<img 
					src="https://img.freepik.com/free-photo/smart-attractive-asian-friendly-male-hand-rise-up-cheerful-exited-standing-smile-with-freshness-joyful-casual-blue-shirt-portrait-white-background_609648-1244.jpg?w=1380&t=st=1668561654~exp=1668562254~hmac=49b679222f8e27e5c92f4b32c9caf7c8ecd117df50761c8b25223b43e353f73c"
					style={styles.image}
				/>
			</div>

			<div style={styles.contentContainer}>
				<span style={styles.nameText}>{props.name}</span>
				<span style={styles.commentText}>{props.comment}</span>
			</div>
		</div>
	)
}

export default Comment;