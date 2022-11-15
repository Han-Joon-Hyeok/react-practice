import React from "react";

const Book = (props) => {
	return (
		<div>
			<h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
			<h2>{`이 책의 페이지는 ${props.numOfPage} 입니다.`}</h2>
		</div>
	)
}

export default Book;