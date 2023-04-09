import CSS from 'csstype';
import { 
    backgroundButton,
    colorButton
 } from '../../../theme/button'
import { fontSize } from '../../../theme/text';
import styled from 'styled-components';


interface ButtonI {
    type: 'link' | 'primary' | 'secondary' | 'danger';
}

export const Button = styled.button`
  text-align: center;
  padding: ${(props: ButtonI) => (props.type === 'link' ? '0' : '0.625rem 1rem')};
  background-color: ${(props: ButtonI) => backgroundButton[props.type]};
  color: ${(props: ButtonI) => colorButton[props.type]};
  border-radius: 1.875rem;
  cursor: pointer;
  font-size: ${fontSize.small};
  width: fit-content;
  text-decoration: ${(props: ButtonI) => (props.type === 'link' ? 'underline' : 'none')};
  border: ${(props: ButtonI) => props.type !== 'link' && props.type !== "danger" ? `1px solid ${backgroundButton.primary}` : 'none' }
`;
