import React, { Component } from 'react';
import styles from '../assets/stylesheets/grid.scss';

class Grid extends Component {
	constructor(props) {
		super(props);

		const gridSize = 20;
		this.grid = new Array(gridSize).fill(undefined);
	}

	render() {
		const rows = this.grid.map((row, y) => {
			const columns = this.grid.map((column, x) => {
				let style = {};
				if (x === this.props.x && y === this.props.y) {
					style = { backgroundColor: 'green' };
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
