import CSS from 'csstype';
import { colors } from '../../../theme/colors';
import { ContainerI } from '.'
import { paddingI } from '../../../theme/layout';

export const containerStyle = (props: ContainerI):CSS.Properties => ({
    // @ts-ignore
    height: props.height ?? 'initial',
    // @ts-ignore
    width: props.width ?? 'initial',
    background: props.background ? colors[props.background] : 'initial',
    // @ts-ignore
    padding: props.padding ? paddingI[props.padding] : 0
})