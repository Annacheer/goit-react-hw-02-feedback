import React from 'react';
import { Button, ContainerBtn } from './Counter.styled';

const Controls = ({ onGood, onNeutral, onBad }) => (
  <ContainerBtn>
    <Button type="button" onClick={onGood}>
      <b>Good</b>
    </Button>
    <Button type="button" onClick={onNeutral}>
      <b>Neutral</b>
    </Button>
    <Button type="button" onClick={onBad}>
      <b>Bad</b>
    </Button>
  </ContainerBtn>
);

export default Controls;
