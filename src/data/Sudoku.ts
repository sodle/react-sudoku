import Run from './Run';
import Square from './Square';

class Sudoku {
    public squares: Square[] = [];
    private rows: Run[] = Array.apply(null, Array(9)).map(() => new Run());
    private cols: Run[] = Array.apply(null, Array(9)).map(() => new Run());
    private boxes: Run[] = Array.apply(null, Array(9)).map(() => new Run());

    constructor() {
        this.rows.forEach((row, y) => {
            this.cols.forEach((col, x) => {
                const box = this.boxes[Math.floor(y / 3) * 3 + Math.floor(x / 3)];
                const s = new Square(x, y, row, col, box);
                row.add(s);
                col.add(s);
                box.add(s);
                this.squares.push(s);
            });
        });
    }
}

export default Sudoku;