import { BoxI } from '.'
import CSS from 'csstype';
import { colors } from '../../../theme/colors';


export const boxStyle = (props: BoxI):CSS.Properties => ({
    display: 'flex',
    flexDirection: props.direction,
    justifyContent: props.horizontalAlign,
    alignItems: props.verticalAlign,
    gap: props.gap,
    height: props.height ?? 'initial',
    width: props.width ?? 'initial',
})