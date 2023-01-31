import styled from 'styled-components';
import { GridI } from '.';
import { device } from '../../../theme/sizes';

export const GridContainer = styled.div<GridI>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 20px;
  @media (max-width: ${device.mobileL}) {
    grid-template-columns: auto
  }
`;