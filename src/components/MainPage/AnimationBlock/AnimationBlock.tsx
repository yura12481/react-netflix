import React from 'react'
import { Box, Typography } from '@mui/material';

const AnimationBlock = () => {
  return (
    <Box padding='70px 45px' className='wrapper'>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        margin='0 auto'
        maxWidth='1100px'
        className='container'
      >
        <Box className='card-text' paddingRight='48px'>
          <Typography
            variant='h1'
            fontSize='50px'
            fontWeight='500'
            className='card-title'
            maxWidth='547px'
            marginBottom='8px'
          >
            Дивіться на телевізорі.
          </Typography>
          <Typography
            variant='h2'
            fontSize='26px'
            fontWeight='400'
            className='card-subtitle'
            maxWidth='547px'
            marginTop='20px'
            marginBottom='7px'
          >
            Дивіться на Smart TV, Playstation, Xbox, Chromecast, Apple TV, Blu-ray-програвачах тощо.
          </Typography>
        </Box>
    <Box>
      <Box className='card-img'
      component='img'
        sx={{
          height: '397px',
          width: '530px',
        }}
        alt="Netflix-Tv"
        src=" https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />

      
      </Box>
    </Box>
    </Box >
  )
}

export default AnimationBlock