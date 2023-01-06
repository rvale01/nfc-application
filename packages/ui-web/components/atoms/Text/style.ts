import { colors }  from '../../../theme/colors'
import { fontSize, fontWeight }  from '../../../theme/text'
import CSS from 'csstype';
interface TextI {
    fontWeight: keyof typeof fontWeight
    size: keyof typeof fontSize 
    color: keyof typeof colors
    textAlign?: 'center'
}

export const textStyle = (props: TextI):CSS.Properties => ({
    color: colors[props.color],
    fontWeight: fontWeight[props.fontWeight],
    fontSize:  fontSize[props.size],
    fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
    textAlign: props.textAlign ?? 'inherit'
})