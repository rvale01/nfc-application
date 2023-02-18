import { colors } from '../../../theme/colors';
import styled, { css } from 'styled-components'

export const SideMenu = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  height: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 100%;
`

export const MenuItem = styled.div<{ active: boolean }>`
  color: ${props => (props.active ? colors.selectedItem : colors.black)};
`