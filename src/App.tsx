import * as React from 'react';
import './App.css';
import SquareView from './components/Square';
import Sudoku from './data/Sudoku';

class App extends React.Component {
  private board: Sudoku;
  private onUpdateBoard: () => void;
  private onSelectSquare: (n: number) => void;
  private selectedSquare: number = -1;

  constructor(props: {}) {
    super(props);
    this.board = new Sudoku();
    this.onUpdateBoard = this.updateBoard.bind(this);
    this.onSelectSquare = this.selectSquare.bind(this);
  }

  public componentWillMount() {
    document.onclick = () => this.selectSquare(-1);
    document.onkeydown = (event: KeyboardEvent) => {
      if (this.selectedSquare < 0) {
        return;
      }
      const num = parseInt(event.key, 10);
      if (num < 0 || num > 9) {
        return;
      }
      this.board.squares[this.selectedSquare].set(num);
      this.updateBoard();
    };
  }

  public render() {
    return (
      <div>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(y => {
          return (
            <div className="row" key={y}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(x => {
                const select = this.onSelectSquare.bind(this, y * 9 + x)
                return (
                  <SquareView square={this.board.squares[y * 9 + x]} key={x + ' ' + y} updateBoard={this.onUpdateBoard} selected={this.selectedSquare === y * 9 + x} select={select} />
                );
              })} 
            </div>
          );
        })
          /* {this.board.squares.map(s => <SquareView square={s} key={s.x + ' ' + s.y} updateBoard={this.onUpdateBoard} />)} */
          }
      </div>
    );
  }

  private selectSquare(n: number) {
    this.selectedSquare = n;
    this.setState({});
  }

  private updateBoard() {
    this.setState({});
  }
}

export default App;
