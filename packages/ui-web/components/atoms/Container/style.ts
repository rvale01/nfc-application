import CSS from 'csstype';
import { colors } from '../../../theme/colors';
import { ContainerI } from '.'
import { paddingI } from '../../../theme/layout';

export const containerStyle = (props: ContainerI):CSS.Properties => ({
    height: props.height ?? 'initial',
    width: props.width ?? 'initial',
    background: props.background ? colors[props.background] : 'initial',
    padding: props.padding ? paddingI[props.padding] : 0
})