import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function GameCard({ id, imageUrl, name, text, setName, type }) {
	return (
		<Card className='card'>
			<CardContent className='card-content'>
				<CardMedia style={{ height: 500, width: 300 }} image={imageUrl} title={id} />
				<div className='content'>
					<Typography gutterBottom variant='h4' component='h1'>
						{name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{text}
					</Typography>

					<div className='card-footer'>
						<Typography variant='body2' color='textPrimary' component='p'>
							{setName}
						</Typography>
						<Typography variant='body2' component='p'>
							{type}
						</Typography>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
