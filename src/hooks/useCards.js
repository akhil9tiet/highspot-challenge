import { useEffect, useState } from 'react';
import * as constants from '../constants';

const fetchData = async (page) => {
	let response = await fetch(
		`https://api.elderscrollslegends.io/v1/cards/?pageSize=${constants.PAGE_SIZE}&page=${page}`
	);
	return response.json();
};

export default function useCards(query, page) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [cardsData, setCardsData] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setCardsData([]);
	}, [query]);

	useEffect(() => {
		setLoading(true);
		setError(false);
		fetchData(page)
			.then((res) => {
				setCardsData((prevCardsData) => {
					return [...new Set([...prevCardsData, res.cards])];
				});
				setHasMore(res._totalCount > 0);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setError(true);
			});
	}, [query, page]);
	return { loading, error, cardsData, hasMore };
}
