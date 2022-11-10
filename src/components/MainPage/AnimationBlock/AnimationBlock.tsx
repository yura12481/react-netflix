import React from 'react'
import { Box, Typography } from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
const AnimationBlock = () => {
  return (
    <>
      {/* Section one */}
      <Box padding='70px 45px' className='wrapper' borderBottom='8px solid #222'>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          margin='0 auto'
          maxWidth='1100px'
          className='container'
          height='325px'
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
          <Box position='relative'>
            <Box className='card-img'
              zIndex='2'
              position='relative'
              component='img'
              sx={{
                height: '397px',
                width: '530px',
              }}
              alt="Netflix-Tv"
              src=" https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            />
            <Box className='card-video' sx={{
              height: '100%',
              left: '50%',
              maxHeight: '54%',
              maxWidth: '73%',
              position: 'absolute',
              top: '46%',
              transform: 'translate(-50%,-50%)',
              width: '100%'
            }} >
              <video autoPlay playsInline muted loop style={{ width: '100%' }}>
                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' />
              </video>
            </Box>
          </Box>
        </Box>
      </Box >
      {/* Section two */}
      <Box padding='70px 45px' className='wrapper' borderBottom='8px solid #222'>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          margin='0 auto'
          maxWidth='1100px'
          className='container'
          height='322px'
          flex='0 1 auto'
        >
          <Box margin='-8% 0 -4% -6%' position='relative'>
            <Box className='card-img'
              position='relative'
              component='img'
              sx={{
                height: '378px',
                width: '505px'
              }}
              alt="Netflix-phone"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
            <Box className='card-animation'
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#000',
                border: '2px solid hsla(0,0%,100%,.25)',
                borderRadius: '0.75em',
                bottom: '8%',
                boxShadow: '0 0 2em 0 #000',
                left: '50%',
                margin: '0 auto',
                minWidth: '15em',
                padding: '0.25em 0.65em',
                position: 'absolute',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '22%'
              }}>
              <Box className='card-animation-img'
                component='img'
                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
                height='64px'
                marginRight='15px'
              />
              <Box className='card-animation-text' marginRight='35%'>
                <Box fontSize='1em' fontWeight='500'>Дивні дива</Box>
                <Box fontSize='.9em' fontWeight='400' color='#0071eb'>Завантаження...</Box>
              </Box>
              <Box className='card-animation-icon'><HourglassBottomIcon /></Box>
            </Box>
          </Box>
          <Box className='card-text' padding='0 0 0 3rem'>
            <Typography
              variant='h1'
              fontSize='50px'
              fontWeight='500'
              className='card-title'
              maxWidth='515px'
              marginBottom='8px'
            >
              Завантажуйте контент і дивіться його офлайн.
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
              Легко зберігайте улюблені телесеріали й фільми, щоб дивитися їх будь-коли.
            </Typography>
          </Box>
        </Box>
      </Box >
      {/* Section three */}
      <Box padding='70px 45px' className='wrapper' borderBottom='8px solid #222'>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          margin='0 auto'
          maxWidth='1100px'
          className='container'
          height='395px'
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
             Дивіться будь-де.
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
              Дивіться фільми й телесеріали без обмежень на смартфоні, планшеті, ноутбуці й телевізорі без доплат.
            </Typography>
          </Box>
          <Box position='relative'>
            <Box className='card-img'
              zIndex='2'
              position='relative'
              component='img'
              sx={{
                height: '416px',
                width: '555px',
              }}
              alt="Netflix-Tv"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            />
            <Box className='card-video' sx={{
              height: '100%',
              left: '50%',
              maxHeight: '54%',
              maxWidth: '63%',
              position: 'absolute',
              top: '38%',
              transform: 'translate(-50%,-50%)',
              width: '100%'
            }} >
              <video autoPlay playsInline muted loop style={{ width: '100%' }}>
                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v' />
              </video>
            </Box>
          </Box>
        </Box>
      </Box >
      {/* Section four */}
      <Box padding='70px 45px' className='wrapper' borderBottom='8px solid #222'>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          margin='0 auto'
          maxWidth='1100px'
          className='container'
          height='322px'
          flex='0 1 auto'
        >
          <Box margin='-8% 0 -4% -6%'>
            <Box className='card-img'
              component='img'
              sx={{
                height: '378px',
                width: '505px'
              }}
              alt="Netflix-phone"
              src="https://occ-0-1433-1490.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdgk9jscJe4n9LpWehWGgwgUlXYrqKzVa7ZHILbxDPUd1OBEJUtRNbjKj4FAPd77BKNFanCU8vg0adazeBrmGtcK6X3I9SvBiwD2.png?r=13e"
            />
          </Box>
          <Box className='card-text' padding='0 0 0 3rem'>
            <Typography
              variant='h1'
              fontSize='50px'
              fontWeight='500'
              className='card-title'
              maxWidth='515px'
              marginBottom='8px'
            >
             Створюйте профілі для дітей.
            </Typography>
            <Typography
              variant='h2'
              fontSize='26px'
              fontWeight='400'
              className='card-subtitle'
              maxWidth='531px'
              marginTop='20px'
              marginBottom='7px'
            >
              Ваші діти зможуть мандрувати країною фантазії разом з улюбленими персонажами в спеціальних профілях, які входять у вартість підписки.
            </Typography>
          </Box>
        </Box>
      </Box >
    </>
  )
}

export default AnimationBlock