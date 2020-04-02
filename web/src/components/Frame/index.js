import React from 'react';

import FrameItem from '../FrameItem';

import { Container } from './styles';

export default function Frame({ title, items }) {
  return (
    <Container>
      <h2>{title}</h2>
      {items.map((item, index) => {
        return <FrameItem 
          name={item.name}
        />
      })}
    </Container>
  );
}
