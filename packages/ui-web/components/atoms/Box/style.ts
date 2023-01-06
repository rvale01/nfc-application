import { BoxI } from '.'
import CSS from 'csstype';
import { colors } from '../../../theme/colors';


export const boxStyle = (props: BoxI):CSS.Properties => ({
    display: 'flex',
    flexDirection: props.direction,
    justifyContent: props.direction === 'row' ? props.horizontalAlign : props.verticalAlign,
    alignItems: props.direction === 'row' ? props.verticalAlign : props.horizontalAlign,
    gap: props.gap,
    height: props.height ?? 'initial',
    width: props.width ?? 'initial',
})