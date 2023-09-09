import React from 'react';
import { Statistics, LiItems, Span } from './Counter.styled';

const Value = ({
  onGoodValue,
  onNeutralValue,
  onBadValue,
  onTotalValue,
  onPositiveValue,
}) => (
  <Statistics>
    <LiItems>
      <Span>Good:</Span>
      {onGoodValue}
    </LiItems>
    <LiItems>
      <Span>Neutral:</Span>
      {onNeutralValue}
    </LiItems>
    <LiItems>
      <Span>Bad:</Span>
      {onBadValue}
    </LiItems>
    <LiItems>
      <Span>Total:</Span>
      {onTotalValue}
    </LiItems>
    <LiItems>
      <Span>Positive feedback:</Span>
      {onPositiveValue}
    </LiItems>
  </Statistics>
);
export default Value;
