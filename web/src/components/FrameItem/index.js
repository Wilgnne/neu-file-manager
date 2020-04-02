import React from 'react';

import { Container } from './styles';

export default function FrameItem({ name }) {
  return (
    <Container>
      <p>{name}</p>
    </Container>
  );
}
