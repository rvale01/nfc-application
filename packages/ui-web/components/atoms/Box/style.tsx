import { BoxI } from '.'
import { gapI } from '../../../theme/layout';
import styled from 'styled-components';
import { device } from '../../../theme/sizes';

export const Box = styled.div`
    display: flex;
    flex-direction: ${(props: BoxI) => props.direction};
    justify-content: ${(props: BoxI) => props.direction === "row" ? props.horizontalAlign : props.verticalAlign};
    align-items: ${(props: BoxI) => props.direction === "row" ? props.verticalAlign : props.horizontalAlign}; 
    gap: ${props => props.gap ? gapI[props.gap] : ''};
    height: ${props => props.height ?? 'initial'};
    width: ${props => props.width };
    @media (max-width: ${device.mobileL}) {
        flex-direction: ${(props: BoxI) => props.responsive ? "column" : "row"};
    }
`