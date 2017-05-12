import { UP, RIGHT, DOWN, LEFT } from './_constants';

class Segment {
	constructor(snake, parentSegment, position) {
		this.snake = snake;
		this.parentSegment = parentSegment;
		this.position = position;
	}

	move(direction) {
		if (this.parentSegment) this.position = this.parentSegment.position;
		else {
			let { x, y } = this.position;

			switch (direction) {
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

			this.position = { x, y };
		}
	}
}

class Snake {
	constructor(gridSize, position) {
		const { x, y } = position;
		const segment1 = new Segment(this, null, position);
		const segment2 = new Segment(this, segment1, { x: x - 1, y });
		const segment3 = new Segment(this, segment2, { x: x - 2, y });
		const segment4 = new Segment(this, segment3, { x: x - 3, y });
		const segment5 = new Segment(this, segment4, { x: x - 4, y });

		this.gridSize = gridSize;
		this.segments = [segment5, segment4, segment3, segment2, segment1];
	}

	move(direction) {
		this.segments.forEach(segment => segment.move(direction));
	}

	length() {
		return this.segments.length;
	}

	segment(i) {
		return this.segments[i];
	}
}

export default Snake;
