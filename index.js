class App extends React.Component {
	render() {

		return (
			<div>
				<h1>The Lazy Slot Machine</h1>
				<Slots 
				s1="X"
				s2="Y"
				s3="T"
				/>
				<Slots 
				s1="X"
				s2="X"
				s3="X"
				/>
				
			</div>
		)
	}
}



ReactDOM.render(<App />, document.getElementById('root'));
