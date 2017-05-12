import { UP, RIGHT, DOWN, LEFT } from './_constants';

class Segment {
	constructor(snake, parentSegment, position) {
		this.snake = snake;
		this.parentSegment = parentSegment;
		this.position = position;
	}

	move() {
		if (this.parentSegment) this.position = this.parentSegment.position;
		else {
			let { x, y } = this.position;

			switch (this.snake.direction) {
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

			if (x < 0) x = this.snake.gridSize - 1;
			else if (x >= this.snake.gridSize) x = 0;
			else if (y < 0) y = this.snake.gridSize - 1;
			else if (y >= this.snake.gridSize) y = 0;

			const foodPosition = this.snake.food.position;
			if (foodPosition.x === x && foodPosition.y === y) {
				const gridSize = this.snake.gridSize;
				const newSegment = new Segment(this.snake, null, { x, y });

				this.snake.segments.push(newSegment);
				this.parentSegment = newSegment;
				this.snake.food.position = {
					x: Math.round(Math.random() * (gridSize - 1)),
					y: Math.round(Math.random() * (gridSize - 1)),
				};
			} else {
				this.position = { x, y };
			}
		}

		return true;
	}
}

class Snake {
	constructor(gridSize, food, position, direction) {
		this.gridSize = gridSize;
		this.food = food;
		this.segments = [new Segment(this, null, position)];
		this.direction = direction;
	}

	move(direction) {
		const oppositeDirections = {};
		oppositeDirections[UP] = DOWN;
		oppositeDirections[RIGHT] = LEFT;
		oppositeDirections[DOWN] = UP;
		oppositeDirections[LEFT] = RIGHT;

		if (oppositeDirections[direction] !== this.direction) {
			this.direction = direction;
		}

		this.segments.forEach(segment => segment.move());
	}

	length() {
		return this.segments.length;
	}

	segment(i) {
		return this.segments[i];
	}
}

export default Snake;
