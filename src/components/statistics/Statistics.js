import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import List from './statistic.component'



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List.Container>
      <h2>Statistics</h2>
      <List>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </List>
    </List.Container>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
