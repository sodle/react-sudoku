import NumberSet from './NumberSet';
import Square from './Square';

const FullSet: NumberSet = new NumberSet([1, 2, 3, 4, 5, 6, 7, 8, 9]);

class Run {
    private squares: Square[] = [];

    public add(square: Square) {
        this.squares.push(square);
    }

    public filledValues() {
        return new NumberSet(this.squares.filter(s => s.value !== 0).map(s => s.value));
    }

    public openValues() {
        return FullSet.difference(this.filledValues());
    }
}

export default Run;