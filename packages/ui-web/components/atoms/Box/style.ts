import { BoxI } from '.'
import CSS from 'csstype';


export const boxStyle = (props: BoxI):CSS.Properties => ({
    display: 'flex',
    flexDirection: props.direction,
    alignContent: props.horizontalAlign,
    justifyContent: props.verticalAlign,
    gap: props.gap
})