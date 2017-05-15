import React, { Component } from 'react';
import Grid from '../../components/Grid';
import Snake from './_snake';
import { UP, RIGHT, DOWN, LEFT } from './_constants';
import styles from '../../assets/stylesheets/game.scss';

class Game extends Component {
	constructor(props) {
		super(props);

		this.snake = new Snake({ x: 0, y: 0 });
		this.state = {
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
			this.snake.move(this.state.direction);

			// FIXME: Shouldn't be calling this
			this.forceUpdate();
		}, 100);
	}

	render() {
		return (
			<div className={styles.root}>
				<Grid snake={this.snake} food={this.food} />
			</div>
		);
	}
}

export default Game;
