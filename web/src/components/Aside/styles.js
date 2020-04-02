import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 384px;
  min-width: 128px;
  height: calc(100% - 64px);
`;

const Panel = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  background: #F0F0F3;
  box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 0px 16px 16px 0px;
`;

export { Container, Panel };
