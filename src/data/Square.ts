import Run from './Run';

class Square {
    public x: number;
    public y: number;
    public value: number;
    public row: Run;
    public col: Run;
    public box: Run;

    constructor(x: number, y: number, row: Run, col: Run, box: Run) {
        this.x = x;
        this.y = y;
        this.value = 0;
        this.row = row;
        this.col = col;
        this.box = box;
    }

    public possibleValues() {
        return this.row.openValues().intersection(this.col.openValues(), this.box.openValues());
    }

    public canBe(n: number) {
        return this.possibleValues().has(n);
    }

    public set(n: number) {
        if (this.canBe(n) || n === 0) {
            this.value = n;
        }
    }
}

export default Square;