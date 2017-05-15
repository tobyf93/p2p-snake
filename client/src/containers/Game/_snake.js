import { GRID_SIZE, UP, RIGHT, DOWN, LEFT } from './_constants';
import Food from './_food';

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

			if (x < 0) x = GRID_SIZE - 1;
			else if (x >= GRID_SIZE) x = 0;
			else if (y < 0) y = GRID_SIZE - 1;
			else if (y >= GRID_SIZE) y = 0;

			// TODO: Maybe some of this logic belongs in Food class...
			for (let i = 0; i < this.snake.food.length; i++) {
				const food = this.snake.food[i];

				if (food.position.x === x && food.position.y === y) {
					const newSegment = new Segment(this.snake, null, { x, y });

					this.snake.segments.push(newSegment);
					this.parentSegment = newSegment;
					food.eat();
				} else {
					this.position = { x, y };
				}
			}
		}

		return true;
	}
}

class Snake {
	constructor(position, direction = RIGHT) {
		this.food = [new Food(this), new Food(this, true)];
		this.bonus = false;
		this.score = 0;
		this.segments = [new Segment(this, null, position)];
		this.direction = direction;
	}

	move(direction) {
		const oppositeDirections = {
			[UP]: DOWN,
			[RIGHT]: LEFT,
			[DOWN]: UP,
			[LEFT]: RIGHT,
		};

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
