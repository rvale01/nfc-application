import CSS from 'csstype';
import { colors } from '../../../theme/colors';
import { ContainerI } from '.'
import { borderRadiusI, paddingI } from '../../../theme/layout';

export const containerStyle = (props: ContainerI):CSS.Properties => ({
    // @ts-ignore
    height: props.height ?? 'initial',
    // @ts-ignore
    width: props.width ?? 'initial',
    background: props.background ? colors[props.background] : 'initial',
    // @ts-ignore
    padding: props.padding ? paddingI[props.padding] : 0,
    boxShadow:props.showShadow ? "0px 7px 20px rgba(0, 0, 0, 0.25)" : 'none',
    // @ts-ignore
    borderRadius: props.borderRadius ? borderRadiusI[props.borderRadius] : '0'
})