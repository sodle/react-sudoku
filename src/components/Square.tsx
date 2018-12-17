import * as React from 'react';
import Square from '../data/Square';

interface ISquareViewProps {
    square: Square
    updateBoard: () => void
    selected: boolean
    select: () => void
}

class SquareView extends React.Component {
    public props: ISquareViewProps;
    private onClick: () => void;
    public constructor(props: ISquareViewProps) {
        super(props);
        this.props = props;
        this.onClick = props.select.bind(this);
    }
    public render() {
        return (
            <div className={[
                'square',
                (this.props.selected) ? 'selected': '',
                (this.props.square.value !== 0) ? 'filled' : '',
                (this.props.square.value === 0 && this.props.square.possibleValues().length === 1) ? 'deterministic' : ''
            ].join(' ')} onClick={this.onClick}>
                {(this.props.square.value !== 0) ? this.props.square.value : this.props.square.possibleValues().join(' ')}
            </div>
        );
    }
}

export default SquareView;