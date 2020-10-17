import React, { Component } from "react";
import FeedbackOptions from "../components/feedback/FeedbackOptions";
import Statistics from "../components/statistics/Statistics";
import Section from "../components/section/Section";
import Notification from "../components/notification/Notification";
import GlobalStyled from "../GlobalStyles.component";
export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = (event) => {
    event.preventDefault();
    Object.keys(this.state).map((item) => {
      if (item === event.target.name) {
        return this.setState({
          [event.target.name]: this.state[item] + 1,
        });
      }
    });
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let i = 0; i < Object.values(this.state).length; i += 1) {
      total += Object.values(this.state)[i];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let total = 0;
    for (let i = 0; i < Object.values(this.state).length; i += 1) {
      total += Object.values(this.state)[i];
    }
    const percentage = (this.state.good / total) * 100;
    return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <GlobalStyled />
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}
