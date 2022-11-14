import React from 'react';
import { useState } from 'react';
import MainPageInputComponent from './MainPageInputComponent';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


const AccordionArray = [
  {
    id: 1,
    expanded: 'panel1',
    title: 'What is Netflix?',
    subtitle: `Netflix is a streaming service that offers a wide variety of award-winning TV shows,
      movies, anime, documentaries, and more on thousands of internet-connected devices.`,
    text: `You can watch as much as you want, whenever you want without a single commercial – 
      all for one low monthly price. There's always something new to discover and new TV shows 
      and movies are added every week!`
  },
  {
    id: 2,
    expanded: 'panel2',
    title: 'How much does Netflix cost?',
    subtitle: `Watch Netflix on your smartphone, tablet, Smart TV,
      laptop, or streaming device, all for one fixed monthly fee. 
      Plans range from EUR4.99 to EUR9.99 a month. No extra costs, no contracts.`,
  },
  {
    id: 3,
    expanded: 'panel3',
    title: 'Where can I watch?',
    subtitle: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly 
      on the web at netflix.com from your personal computer or on any 
      internet-connected device that offers the Netflix app, including smart TVs, smartphones, 
      tablets, streaming media players and game consoles.`,
    text: `You can also download your favorite shows with the iOS, Android, or Windows 10 app. 
      Use downloads to watch while you're on the go and without an internet connection. 
      Take Netflix with you anywhere.`
  },
  {
    id: 4,
    expanded: 'panel4',
    title: 'How do I cancel?',
    subtitle: `Netflix is flexible. There are no pesky contracts and no commitments.
      You can easily cancel your account online in two clicks. There are no cancellation 
      fees – start or stop your account anytime.`
  },
  {
    id: 5,
    expanded: 'panel5',
    title: 'What can I watch on Netflix?',
    subtitle: `Netflix has an extensive library of feature films, documentaries, TV shows, 
      anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`
  },
  {
    id: 6,
    expanded: 'panel6',
    title: 'Is Netflix good for kids?',
    subtitle: `The Netflix Kids experience is included in your membership to give parents 
      control while kids enjoy family-friendly TV shows and movies in their own space.`,
    text: `Kids profiles come with PIN-protected parental controls that let you restrict 
      the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
  },
  {
    id: 7,
    expanded: 'panel7',
    title: 'Why am I seeing this language?',
    subtitle: 'Your browser preferences determine the language shown here.'
  },
]

const MainPage = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  }
  return (
    <>
      {/* main */}
      <Box
        className='main-information'
        borderBottom='8px solid #222'
        color='#fff'
        padding='70px 45px'
      >
        <Box
          margin='0 auto'
          maxWidth='950px'
          padding='75px 0'
          position='relative'
          textAlign='center'
          width='100%'
        >
          <Typography
            variant="h1"
            fontSize='4rem'
            fontWeight='500'
            maxWidth='794px'
            textAlign='center'
            margin='0 auto'
          >
            Unlimited movies, TV shows, and more.
          </Typography>
          <Typography
            variant='h2'
            margin='1rem auto'
            fontWeight='400'
            fontSize='1.625rem'
          >
            Watch anywhere. Cancel anytime.
          </Typography>
          <MainPageInputComponent />
        </Box>
      </Box>
      {/* main end */}
      <Box className='card-animation' sx={{ background: '#000', color: 'white' }}>
        {/* Animation section one */}
        <Box padding='70px 45px' className='card-wrapper' borderBottom='8px solid #222' >
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
                Enjoy on your TV.
              </Typography>
              <Typography
                variant='h2'
                className='card-subtitle'
                maxWidth='547px'
                marginTop='20px'
                marginBottom='7px'
                fontSize='26px'
                fontWeight='400'
              >
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
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
        {/* Animation section two */}
        <Box padding='70px 45px' className='card-wrapper' borderBottom='8px solid #222'>
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
                  width: '61%',
                  height: '22%'
                }}>
                <Box className='card-animation-img'
                  component='img'
                  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
                  height='64px'
                  marginRight='15px'
                />
                <Box className='card-animation-text' marginRight='35%'>
                  <Box fontSize='1em' fontWeight='500'>Stranger Things</Box>
                  <Box fontSize='.9em' fontWeight='400' color='#0071eb'>Downloading...</Box>
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
                Download your shows to watch offline.
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
                Save your favorites easily and always have something to watch.
              </Typography>
            </Box>
          </Box>
        </Box >
        {/* Animation section three */}
        <Box padding='70px 45px' className='card-wrapper' borderBottom='8px solid #222'>
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
                Watch everywhere.
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
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
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
        {/* Animation section four */}
        <Box padding='70px 45px' className='card-wrapper' borderBottom='8px solid #222'>
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
                Create profiles for kids.
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
                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </Typography>
            </Box>
          </Box>
        </Box >
      </Box>
      <Box
        className='container'
        padding='70px 45px'
        textAlign='center'
        alignItems='center'
        borderBottom='8px solid #222'
        sx={{ background: '#000', color: '#fff' }}
      >
        {/* Accordion */}
        <Typography variant='h1' fontSize='3.125rem' fontWeight='500' marginBottom='0.5rem'>
          Frequently Asked Questions
        </Typography>
        <Box margin='2rem auto' width='75%' maxWidth='815px'>
          {AccordionArray.map(item => (
            <Accordion key={item.id}
              expanded={expanded === item.expanded}
              sx={{ background: '#303030', color: '#fff', margin: '0 0 8px' }}
              onChange={(event, isExpanded) => handleChange(isExpanded, `${item.expanded}`)}
            >
              <AccordionSummary sx={{ height: '75px', borderBottom: '1px solid black' }}
                id={`panel${item.id}a-header`}
                aria-controls={`panel${item.id}a-content`}
                expandIcon={
                  expanded === item.expanded
                    ?
                    <CloseIcon fontSize='large' sx={{ color: 'white' }} />
                    :
                    <AddIcon fontSize='large' sx={{ color: 'white' }}
                    />
                }
              >
                <Typography fontWeight='400' fontSize='26px'>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ textAlign: 'left', padding: '1.2em' }}>
                <Typography component='span' fontSize='26px' fontWeight='400'>
                  {item.subtitle}
                  {item.text ? (<><br /><br />{item.text}</>) : null}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}    
        </Box>
        <MainPageInputComponent/>
      </Box>
    </>
  )
}

export default MainPage;
