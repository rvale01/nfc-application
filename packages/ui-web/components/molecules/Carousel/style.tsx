import { colors } from '../../../theme/colors'
import styled from 'styled-components';



interface DotI {
    isSelected: boolean
}

export const Dot = styled.div<DotI>`
  background-color: ${colors.white};
  border: 1px solid transparent;
  border-radius: 50%;
  height: ${props => (props.isSelected ? '1rem' : '0.5rem')};
  width: ${props => (props.isSelected ? '1rem' : '0.5rem')};
  cursor: pointer;
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 1rem;
  gap: 2rem;
`;