class NumberSet {
    private set = new Set<number>();
    get length(): number {
        return this.set.size;
    }

    constructor(set?: NumberSet | Set<number> | number[]) {
        if (set) {
            if (set instanceof NumberSet) {
                this.set = new Set(set.values());
            } else {
                this.set = new Set(set);
            } 
        }
    }
    
    public values() {
        return this.set.values();
    }

    public join(separator?: string) {
        return Array.from(this.set).join(separator);
    }

    public has(n: number) {
        return this.set.has(n);
    }

    public delete(n: number) {
        return this.set.delete(n);
    }

    public union(...sets: NumberSet[]) {
        const x = new NumberSet();
        sets.unshift(this);
        sets.forEach(s => s.set.forEach(e => x.set.add(e)));
        return x;
    }

    public intersection(...sets: NumberSet[]) {
        sets.unshift(this);
        return sets.reduce((a, b) => {
            const x = new NumberSet();
            b.set.forEach(v => {if (a.set.has(v)) {
                x.set.add(v)}
            });
            return x;
        });
    }

    public difference(...sets: NumberSet[]) {
        sets.unshift(this);
        return sets.reduce((a, b) => {
            const x = new NumberSet(a);
            b.set.forEach(v => {
                if (x.has(v)) {
                    x.delete(v);
                }
            });
            return x;
        });
    }
}

export default NumberSet;
