import CSS from 'csstype';
import { colors } from '../../../theme/colors';
import { ContainerI } from '.'
import { borderRadiusI, paddingI } from '../../../theme/layout';
import styled from 'styled-components';

export const Container = styled.div`
  height: ${(props: ContainerI) => props.height ?? 'initial'};
  width: ${(props: ContainerI) => props.width ?? 'initial'};
  background: ${(props: ContainerI) => props.background ? colors[props.background] : 'initial'};
  padding: ${(props: ContainerI) => props.padding ? paddingI[props.padding] : 0};
  box-shadow: ${(props: ContainerI) => props.showShadow ? "0px 7px 20px rgba(0, 0, 0, 0.25)" : 'none'};
  border-radius: ${(props: ContainerI) => props.borderRadius ? borderRadiusI[props.borderRadius] : '0'};
  min-width:${(props: ContainerI) => props.minWidth ?? 'initial'}; ;
`;