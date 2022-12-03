import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistic from './Statistic/Statistic';
import Section from './Section.jsx/Section';
import Message from './Message/Message';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const comments = Object.values(this.state);
    return comments.reduce((acc, comment) => acc + comment, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  render() {
    const { onClick, countTotalFeedback, countPositiveFeedbackPercentage } =
      this;
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback();
    return (
      <div>
        <h1>Cafe "Expresso"</h1>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={onClick}
          ></Feedback>
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Message message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(total, good)}
            ></Statistic>
          )}
        </Section>
      </div>
    );
  }
}

export { App };
