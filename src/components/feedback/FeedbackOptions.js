import React from "react";
import PropTypes from "prop-types";
import Buttons from './feedbackOptions.component'



const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons.Container>
      {Object.keys(options).map((item) => (
        <Buttons key={item} type="button" name={item} onClick={onLeaveFeedback}>
          {item}
        </Buttons>
      ))}
    </Buttons.Container>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
