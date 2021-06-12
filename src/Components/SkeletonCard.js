import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

export default function SkeletonCard() {
	return (
		<Grid className='item' item xs={12} sm={4} md={4} lg={3}>
			<Card className='card'>
				<CardContent className='card-content'>
					<Skeleton animation='wave' height={600} width={300} />
					<div className='content'>
						<Skeleton animation='wave' height={10} width='80%' style={{ marginBottom: 6 }} />
						<Skeleton animation='wave' height={10} width='40%' style={{ marginBottom: 8 }} />

						<div className='card-footer'>
							<Skeleton animation='wave' height={10} width='10%' style={{ marginBottom: 5 }} />
							<Skeleton animation='wave' height={10} width='10%' style={{ marginBottom: 5 }} />
						</div>
					</div>
				</CardContent>
			</Card>
		</Grid>
	);
}
