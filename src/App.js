import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import './App.css';

const pageSize = 20;

const fetchData = async (page) => {
	let response = await fetch(`https://api.elderscrollslegends.io/v1/cards/?pageSize=${pageSize}&page=${page}`);
	return response.json();
};

function App() {
	let [data, setData] = useState([]);
	let [page, setPage] = useState(1);

	useEffect(() => {
		fetchData(page).then((res) => setData(res.cards));
	}, [page]);

	console.log(data);
	return (
		<div className='App'>
			<p>Test</p>
			<div>
				{(data || []).map((card, index) => (
					<div key={card.id}>
						<Card
							imageUrl={card.imageUrl}
							id={card.id}
							name={card.name}
							setName={card.set.name}
							type={card.type}
							text={card.text}
						/>
					</div>
				))}
			</div>
			<button onClick={() => setPage(page + 1)}>Click</button>
		</div>
	);
}

export default App;
