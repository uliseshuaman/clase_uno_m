import { Grid } from '@mui/material'
import React from 'react'
import CommonButton from '../../components/commonButton/CommonButton'

const Authentication = () => {
  const buttomStyle = {
      fontSize: 20,
      fontWight: 700,
      backgroundColor: 'red',
      '&:hover':{
          backgroundColor:'yellow'
      }
  }
  return (
    
    <Grid item xs={8} >
        Autentication part
        <CommonButton 
          size='Large'
          variant='contained'
          sx={buttomStyle}
          >Text
          </CommonButton>
    </Grid>
    
  )
}

export default Authentication