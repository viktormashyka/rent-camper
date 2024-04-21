import styled from 'styled-components';

import NotFoundImage from '../../images/404-error.webp';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${NotFoundImage});
  background-repeat: no-repeat;
  background-size: contain;
`;
