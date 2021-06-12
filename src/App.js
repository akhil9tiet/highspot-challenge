import React, { useState, useEffect, useRef, useCallback } from 'react';
import GameCard from './components/GameCard';
import * as constants from './constants';
import Grid from '@material-ui/core/Grid';
import SkeletonCard from './components/SkeletonCard';

import './App.css';

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
	const [search, setSearch] = useState('');

	const observer = useRef();

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

	const lastCardElemenetRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPage((prevPage) => prevPage + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	return (
		<React.Fragment>
			<Grid container className='container'>
				{(data || []).map((card, index) => {
					if (data.length === index + 1) {
						return (
							<Grid
								ref={lastCardElemenetRef}
								className='item'
								item
								xs={12}
								sm={4}
								md={4}
								lg={3}
								key={index}>
								{/* <div key={card.id}> */}
								<GameCard
									imageUrl={card.imageUrl}
									id={card.id}
									name={card.name}
									setName={card.set.name}
									type={card.type}
									text={card.text}
								/>
								{/* </div> */}
							</Grid>
						);
					} else {
						return (
							<Grid className='item' item xs={12} sm={4} md={4} lg={3} key={index}>
								<GameCard
									imageUrl={card.imageUrl}
									id={card.id}
									name={card.name}
									setName={card.set.name}
									type={card.type}
									text={card.text}
								/>
							</Grid>
						);
					}
				})}
				{loading && (
					<>
						<SkeletonCard />
						<SkeletonCard />
						<SkeletonCard />
						<SkeletonCard />
					</>
				)}
				{error && 'Error in loading cards...'}
			</Grid>
		</React.Fragment>
	);
}

export default App;
