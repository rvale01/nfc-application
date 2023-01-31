import { colors }  from '../../../theme/colors'
import { fontSize, fontWeight }  from '../../../theme/text'
import styled from 'styled-components';

interface TextI {
    fontWeight: keyof typeof fontWeight
    size: keyof typeof fontSize 
    color: keyof typeof colors
    textAlign?: 'center'
}

export const Text = styled.p`
  color: ${(props: TextI) => colors[props.color]};
  font-weight: ${(props: TextI) => fontWeight[props.fontWeight]};
  font-size: ${(props: TextI) => fontSize[props.size]};
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  text-align: ${(props: TextI) => props.textAlign ?? 'inherit'};
`;