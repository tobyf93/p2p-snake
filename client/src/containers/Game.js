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

		this.state = {
			x: 0,
			y: 0,
			direction: RIGHT,
		};
	}

	componentDidMount() {
		document.onkeypress

		setInterval(() => {
			let x = this.state.x;
			let y = this.state.y;

			switch (this.state.direction) {
			case RIGHT:
				x++;
			default:
			}

			if (x >= 20) x = 0;

			this.setState({ x, y });
		}, 100);
	}

	render() {
		return (
			<div className={styles.root}>
				<Grid x={this.state.x} y={this.state.y} />
			</div>
		);
	}
}

export default Game;
