import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../../../assets/theme/colors';
import { Box } from '../Box';

export const Loader = () => {
    return (
      <Box horizontalAlign="center" verticalAlign="center" direction="column">
        <ActivityIndicator size={'large'} color={colors.primary} />
      </Box>
    );
};
