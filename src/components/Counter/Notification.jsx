import React from 'react';
import PropTypes from 'prop-types';
import { LiItems } from './Counter.styled';

const Notification = ({ message }) => {
  return <LiItems>{message}</LiItems>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
