import React from "react";
import Book from "./Book";

const Library = (props) => {
	return (
		<div>
			<Book name="42 모닝글로리" numOfPage={300} />
			<Book name="42 Peer" numOfPage={200} />
			<Book name="42 팔만코딩경" numOfPage={350} />
		</div>
	)
}

export default Library;