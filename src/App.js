import React, { useState, useEffect } from 'react';
import GameCard from './Components/GameCard';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
		<React.Fragment>
			<p>Test</p>
			<Grid container className='container'>
				{(data || []).map((card, index) => (
					<GameCard
						imageUrl={card.imageUrl}
						id={card.id}
						name={card.name}
						setName={card.set.name}
						type={card.type}
						text={card.text}
					/>
				))}
			</Grid>
		</React.Fragment>
	);
}

export default App;
