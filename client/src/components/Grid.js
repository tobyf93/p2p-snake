import React, { Component } from 'react';
import { GRID_SIZE } from '../containers/Game/_constants';
import styles from '../assets/stylesheets/grid.scss';

class Grid extends Component {
	constructor(props) {
		super(props);

		this.grid = new Array(GRID_SIZE).fill(undefined);
	}

	render() {
		const baseStyle = {
			backgroundSize: 'contain',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		};

		const rows = this.grid.map((row, y) => {
			const columns = this.grid.map((column, x) => {
				let style = { ...baseStyle };

				this.props.snake.food.forEach((food) => {
					if (!this.props.snake.bonus && food.special) {
						return;
					}

					if (food.position.x === x && food.position.y === y) {
						let image = 'poo.png';
						if (food.special) image = 'star.gif';

						style = { ...style, backgroundImage: `url(${image})` };
					}
				});

				for (let i = 0; i < this.props.snake.length(); i++) {
					const segmentPosition = this.props.snake.segment(i).position;

					if (segmentPosition.x === x && segmentPosition.y === y) {
						style = { ...style, backgroundColor: 'green' };
						break;
					}
				}

				return (
					<div key={x} className={styles.cell}>
						<div className={styles.inner} style={style} />
					</div>
				);
			});

			return (
				<div key={y} className={styles.row}>
					{columns}
				</div>
			);
		});

		return (
			<div className={styles.root}>
				{rows}
			</div>
		);
	}
}

export default Grid;
