import React, { Component } from 'react';
import Feedback from './Feedback';
import Statistic from './Statistic';
import Section from './Section';
import Message from './Message';
import { AiOutlineCoffee } from 'react-icons/ai';
import { Container, Title } from './App.styled';

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
      <Container>
        <Title>Cafe "Expresso"</Title>
        <AiOutlineCoffee color="#45322E" fontSize="5em" />
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
      </Container>
    );
  }
}

export { App };
