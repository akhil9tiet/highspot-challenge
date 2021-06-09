import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function GameCard({ id, imageUrl, name, text, setName, type }) {
	return (
		<Grid className='item' item xs={12} sm={6} md={4} lg={3} key={id}>
			<Card className='card'>
				<CardContent className='card-content'>
					<CardMedia style={{ height: 500, width: 300 }} image={imageUrl} title={id} />
					<div className='content'>
						<Typography variant='body2' component='h1'>
							{name}
						</Typography>
						<p>{name}</p>
						<p>{setName}</p>
						<p>{type}</p>
						<br />
						<div className='icon'>
							<p>{text}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
