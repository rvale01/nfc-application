import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <Box gap="medium" direction='row'>
      <Text text={title} fontWeight="bold" size="large" color="black" />
      {children}
    </Box>
  );
};
