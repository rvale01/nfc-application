import CSS from 'csstype';
import { colors } from '../../../theme/colors';
import { gapI, paddingI } from '../../../theme/layout';

export const sideMenu = ():CSS.Properties => ({
    width: "30%",
    display: 'flex',
    flexDirection: 'column',
    // @ts-ignore
    gap: gapI.small,
    // @ts-ignore
    padding: paddingI.medium,
    height: '100%',
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)"
})

export const menuItem = (active: boolean):CSS.Properties => ({
    color: active ? colors.selectedItem : colors.black,
})