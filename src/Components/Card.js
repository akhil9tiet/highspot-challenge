import React from 'react';

export default function Card({ id, imageUrl, name, text, setName, type }) {
	return (
		<div>
			<img src={imageUrl} height={400} width={300} alt={name} />
			<h1>{name}</h1>
			<h2>{setName}</h2>
			<h4>{type}</h4>
			<p>{text}</p>
		</div>
	);
}
