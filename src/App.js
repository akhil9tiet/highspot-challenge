import React, { useState, useEffect } from 'react';
import GameCard from './components/GameCard';
import * as constants from './constants';
import Grid from '@material-ui/core/Grid';

// import useCards from './hooks/useCards';

import './App.css';
import SkeletonCard from './components/SkeletonCard';

// const pageSize = 20;

const fetchData = async (page) => {
	let response = await fetch(
		`https://api.elderscrollslegends.io/v1/cards/?pageSize=${constants.PAGE_SIZE}&page=${page}`
	);
	return response.json();
};

function App() {
	let [data, setData] = useState([]);
	let [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setLoading(true);
		setError(false);
		fetchData(page)
			.then((res) => {
				setData((prevData) => [...new Set([...prevData, ...res.cards])]);
				setHasMore(res.cards.length > 0);
				setLoading(false);
			})
			.catch((err) => setError(true));
	}, [page]);

	console.log(data);

	return (
		<React.Fragment>
			<p>Test</p>
			<Grid container className='container'>
				{(data || []).map((card, index) =>
					loading ? (
						<SkeletonCard />
					) : (
						<GameCard
							imageUrl={card.imageUrl}
							id={card.id}
							name={card.name}
							setName={card.set.name}
							type={card.type}
							text={card.text}
						/>
					)
				)}
			</Grid>
		</React.Fragment>
	);
}

export default App;
