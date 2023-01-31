import styled, { keyframes } from 'styled-components';
import { LoadingSpinnerI } from '.';
import { colors } from '../../../theme/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinnerContainer = styled.div`
  border: 4px solid #f3f3f3; /* light gray */
  border-top: 4px solid ${(props: LoadingSpinnerI) => colors[props.color]};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotate} 1s linear infinite;
`;