import React, { ChangeEvent } from 'react';

interface CounterProps {
  title: string;
}

interface CounterState {
  jumpBy: number;
  currentValue: number;
}

export class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      jumpBy: 1,
      currentValue: 1
    };
  }

  changeValueBy = (jumpBy: number): void => {
    this.setState(prevState => ({
      currentValue: prevState.currentValue + jumpBy
    }));
  };

  changeJumpValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const newJumpValue = parseInt(e.target.value);
    this.setState({ jumpBy: newJumpValue });
  };

  render() {
    return (
      <div>
        <div>It's vnscriptkid, This is the {this.props.title}</div>
        <button onClick={() => this.changeValueBy(this.state.jumpBy)}>
          Increment by {this.state.jumpBy}
        </button>
        <button onClick={() => this.changeValueBy(this.state.jumpBy * -1)}>
          Decrement by {this.state.jumpBy}
        </button>
        <button>Now: {this.state.currentValue}</button>
        <h2>
          Change Jump value:{' '}
          <input
            type='number'
            value={this.state.jumpBy}
            onChange={this.changeJumpValue}
          />
        </h2>
      </div>
    );
  }
}
