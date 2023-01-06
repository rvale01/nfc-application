import { colors } from '../../../theme/colors'
import CSS from 'csstype'

interface DotI {
    isSelected: boolean
}
export const dotStyle = (props: DotI):CSS.Properties  => ({
    backgroundColor: colors.white,
    border: '1px solid transparent',
    borderRadius: '50%',
    height:  props.isSelected ? '1rem' : '0.5rem', 
    width: props.isSelected ? '1rem' : '0.5rem', 
    cursor: 'pointer'
})

export const dotsContainerStyle:CSS.Properties = {
    display: 'flex',
    gap: '0.2rem',
    flexDirection: 'column',
    alignItems: 'center',
}

export const carouselContainerStyle:CSS.Properties ={
    backgroundColor: colors.primary,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    padding: '1rem',
    gap: '2rem',
} 