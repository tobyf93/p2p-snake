import { GRID_SIZE } from './_constants';

const randomPosition = () => ({
	x: Math.round(Math.random() * (GRID_SIZE - 1)),
	y: Math.round(Math.random() * (GRID_SIZE - 1)),
});

class Food {
	constructor(snake, special = false) {
		this.snake = snake;
		this.position = randomPosition();
		this.special = special;
	}

	eat() {
		this.snake.score++;

		if (this.snake.score % 5 === 0) this.snake.bonus = true;
		if (this.special) this.snake.bonus = false;

		this.position = randomPosition();
	}
}

export default Food;
