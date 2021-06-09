import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function GameCard({ id, imageUrl, name, text, setName, type }) {
	return (
		<Grid className='item' item xs={12} sm={4} md={4} lg={3} key={id}>
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
		</Grid>
	);
}
