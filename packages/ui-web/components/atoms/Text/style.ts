import { colors }  from '../../../theme/colors'
import { fontSize, fontWeight }  from '../../../theme/text'
import CSS from 'csstype';
interface TextI {
    fontWeight: 'bold' | 'normal'
    size: 'large' | 'medium' | 'small' 
    //| 'standard'
    color: keyof typeof colors
}

export const textStyle = (props: TextI):CSS.Properties => ({
    color: colors[props.color],
    fontWeight: fontWeight[props.fontWeight],
    fontSize:  fontSize[props.size],
    fontFamily: 'Arial, Helvetica, sans-serif'
})