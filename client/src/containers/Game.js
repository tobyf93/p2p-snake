import React, { Component } from 'react';
import Grid from '../components/Grid';
import styles from '../assets/stylesheets/game.scss';

const UP = 'UP';
const RIGHT = 'RIGHT';
const DOWN = 'DOWN';
const LEFT = 'LEFT';

class Game extends Component {
	constructor(props) {
		super(props);

		this.gridSize = 20;
		this.state = {
			x: 0,
			y: 0,
			direction: RIGHT,
		};
	}

	componentDidMount() {
		document.onkeydown = (e) => {
			switch (e.keyCode) {
				case 37:
					this.setState({ direction: LEFT });
					break;
				case 38:
					this.setState({ direction: UP });
					break;
				case 39:
					this.setState({ direction: RIGHT });
					break;
				case 40:
					this.setState({ direction: DOWN });
					break;
				default:
			}
		};

		setInterval(() => {
			let x = this.state.x;
			let y = this.state.y;

			switch (this.state.direction) {
				case UP:
					y--;
					break;
				case RIGHT:
					x++;
					break;
				case DOWN:
					y++;
					break;
				case LEFT:
					x--;
					break;
				default:
			}

			if (x < 0) x = this.gridSize - 1;
			else if (x >= this.gridSize) x = 0;
			else if (y < 0) y = this.gridSize - 1;
			else if (y >= this.gridSize) y = 0;

			this.setState({ x, y });
		}, 100);
	}

	render() {
		return (
			<div className={styles.root}>
				<Grid gridSize={this.gridSize} x={this.state.x} y={this.state.y} />
			</div>
		);
	}
}

export default Game;
