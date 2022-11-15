// 버튼을 클릭하면 Clicked 로 바뀌는 예제

const MyButton = (props) => {
	const [isClicked, setIsClicked] = React.useState(false);
	return React.createElement(
		'button',
		{ onClick: () => setIsClicked(true) },
		isClicked ? 'Clicked!' : 'Click here!'
	)
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);