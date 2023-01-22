import CSS from 'csstype';
import { 
    backgroundButton,
    colorButton
 } from '../../../theme/button'
import { fontSize } from '../../../theme/text';

interface ButtonI {
    type: 'link' | 'primary' | 'secondary' 
    // | 'danger';
}

export const buttonStyle = (props: ButtonI):CSS.Properties => ({
    textAlign: 'center',
    padding: props.type === 'link' ? '0' : '0.625rem 1rem',
    backgroundColor: backgroundButton[props.type],
    border: 'none',
    color:  colorButton[props.type],
    borderRadius: '1.875rem',
    cursor: 'pointer',
    fontSize: fontSize.small,
    width: 'fit-content',
    textDecoration: props.type === 'link' ? 'underline' : 'none'
})