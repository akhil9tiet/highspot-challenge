import React, { useState, useEffect } from 'react';
import './App.css';

const fetchData = async () => {
	let response = await fetch(`https://api.elderscrollslegends.io/v1/cards`);
	return response.json();
};

function App() {
	let [data, setData] = useState([]);

	useEffect(() => {
		fetchData().then((res) => setData(res.cards));
	}, []);

	console.log(data);
	return (
		<div className='App'>
			<p>Test</p>
		</div>
	);
}

export default App;
