import { Component } from 'react';
import Controls from './Controls';
import Value from './Statistics';
import Notification from './Notification';
import { Container } from './Counter.styled';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = () => this.setState(prevState => ({ good: prevState.good + 1 }));
  handleNeutral = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  handleBad = () => this.setState(prevState => ({ bad: prevState.bad + 1 }));

  render() {
    const { good, neutral, bad } = this.state;
    const onTotalValue = good + neutral + bad;
    const onPositiveValue = (good / onTotalValue) * 100;

    return (
      <Container>
        <h1>Please leave feedback</h1>
        <Controls
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />
        <h2>Statistics</h2>
        {onTotalValue > 0 ? (
          <Value
            onGoodValue={good}
            onNeutralValue={neutral}
            onBadValue={bad}
            onTotalValue={onTotalValue}
            onPositiveValue={onPositiveValue}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}

export default Counter;
