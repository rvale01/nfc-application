import { BoxI } from '.'
import CSS from 'csstype';
import { colors } from '../../../theme/colors';
import { gapI } from '../../../theme/layout';


export const boxStyle = (props: BoxI):CSS.Properties => ({
    display: 'flex',
    flexDirection: props.direction,
    justifyContent: props.direction === 'row' ? props.horizontalAlign : props.verticalAlign,
    alignItems: props.direction === 'row' ? props.verticalAlign : props.horizontalAlign,
    gap: props.gap ? gapI[props.gap] : '',
    // @ts-ignore
    height: props.height ?? 'initial',
    // @ts-ignore
    width: props.width ?? 'initial',
})