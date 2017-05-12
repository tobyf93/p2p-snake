import React, { Component } from 'react';
import styles from '../assets/stylesheets/grid.scss';

class Grid extends Component {
	constructor(props) {
		super(props);

		this.grid = new Array(props.gridSize).fill(undefined);
	}

	render() {
		const rows = this.grid.map((row, y) => {
			const columns = this.grid.map((column, x) => {
				let style = {};

				for (let i = 0; i < this.props.snake.length(); i++) {
					const segmentPosition = this.props.snake.segment(i).position;

					if (segmentPosition.x === x && segmentPosition.y === y) {
						style = { backgroundColor: 'green' };
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
