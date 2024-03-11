import React from 'react';
import Button from '@mui/material/Button';

const CommonButton = ({children, color, disabled, size, sx, variant}) => {
  return (
    <Button
        color={color}
        disabled= {disabled}
        variant={variant}
        sx={sx}
    >
        {children}
    </Button>
  )
}

export default CommonButton