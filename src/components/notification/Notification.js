import React from "react";
import PropTypes from "prop-types";
import Result from "./Notification.component";
const Notification = ({ message }) => <Result>{message}</Result>;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
