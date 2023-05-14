import React from 'react';
import { colors } from '../../../theme/colors';
import { Box } from '../Box';
import { LoadingSpinnerContainer } from './style';

export interface LoadingSpinnerI {
    color: keyof typeof colors;
}

export const Loading = ({ color }: LoadingSpinnerI) => {
    return (
        <Box direction="column" height="100%" width="100%" horizontalAlign='center' verticalAlign='center'>
            <LoadingSpinnerContainer color={color} />
        </Box>
    )
  };
    
  
  