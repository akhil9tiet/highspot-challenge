import React, { useState } from 'react';
import GameCard from './components/GameCard';
import Grid from '@material-ui/core/Grid';
import useCards from './hooks/useCards';

import './App.css';

const pageSize = 20;

// const fetchData = async (page) => {
// 	let response = await fetch(`https://api.elderscrollslegends.io/v1/cards/?pageSize=${pageSize}&page=${page}`);
// 	return response.json();
// };

function App() {
	let [query, setQuery] = useState([]);
	let [page, setPage] = useState(1);

	// useEffect(() => {
	// 	fetchData(page).then((res) => setData(res.cards));
	// }, [page]);

	const { loading, error, cardsData, hasMore } = useCards(query, page);

	console.log(query);
	return (
		<React.Fragment>
			<p>Test</p>
			<Grid container className='container'>
				{(query || []).map((card, index) => (
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
