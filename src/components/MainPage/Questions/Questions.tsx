import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useFormik } from 'formik';
import { validationSchema } from '../InfoBlock/Validations/validationSchema';

const Questions = () => {
  ////////////////////////// FORMIK
  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },

    validationSchema: validationSchema
  })
  ////////////////////////// FORMIK END

  /////////////////////////////////////////////////////////////// STATE
  const [expanded, setExpanded] = useState<string | false>(false);
  /////////////////////////////////////////////////////////////// STATE END

  /////////////////////////////////////////////////////////////// HANDLE
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  }
  /////////////////////////////////////////////////////////////// HANDLE END
  return (
    <>
      <Box
        className='container'
        padding='70px 45px'
        textAlign='center'
        alignItems='center'
        borderBottom='8px solid #222'
      >
        {/* Section one */}
        <Typography variant='h1' fontSize='3.125rem' fontWeight='500' marginBottom='52px'>
          Поширені запитання
        </Typography>
        <Box margin='8px auto' width='75%' maxWidth='815px'>
          <Accordion
            expanded={expanded === 'panel1'}
            sx={{ background: '#303030', color: '#fff' }}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
          >
            <AccordionSummary sx={{ height: '75px', borderBottom: '1px solid black' }}
              id="panel1a-header"
              aria-controls="panel1a-content"
              expandIcon={
                expanded === 'panel1'
                  ?
                  <CloseIcon fontSize='large' sx={{ color: 'white' }} />
                  :
                  <AddIcon fontSize='large' sx={{ color: 'white' }}
                  />
              }
            >
              <Typography fontWeight='400' fontSize='26px'>Що таке Netflix?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'left', padding: '1.2em' }}>
              <Typography component='span' fontSize='26px' fontWeight='400'>
                Netflix — це сервіс потокового передавання відео,
                що дає змогу дивитися різноманітні відзначені нагородами телесеріали,
                фільми, аніме, документалістику й інший контент на тисячах пристроїв із
                підключенням до Інтернету.
                <br />
                <br />
                Ви можете дивитися скільки завгодно й коли завгодно без реклами,
                і все це за єдиною низькою щомісячною ціною.
                Ви завжди знайдете для себе щось нове. Крім того, ще більше телесеріалів і фільмів додається щотижня!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Section two */}

        <Box margin='8px auto' width='75%' maxWidth='815px'>
          <Accordion
            expanded={expanded === 'panel2'}
            sx={{ background: '#303030', color: '#fff' }}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
          >
            <AccordionSummary sx={{ height: '75px', borderBottom: '1px solid black' }}
              id="panel2a-header"
              aria-controls="panel2a-content"
              expandIcon={
                expanded === 'panel2'
                  ?
                  <CloseIcon fontSize='large' sx={{ color: 'white' }} />
                  :
                  <AddIcon fontSize='large' sx={{ color: 'white' }}
                  />
              }
            >
              <Typography fontWeight='400' fontSize='26px'>Скільки коштує підписка Netflix?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'left', padding: '1.2em' }}>
              <Typography component='span' fontSize='26px' fontWeight='400'>
                Дивіться Netflix на смартфоні, планшеті, Smart TV,
                ноутбуці або пристрої потокової передачі за
                фіксованою щомісячною ціною. Плани від 4,99 EUR до 9,99 EUR на місяць.
                Без доплат й угод.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Section three */}

        <Box margin='8px auto' width='75%' maxWidth='815px'>
          <Accordion
            expanded={expanded === 'panel3'}
            sx={{ background: '#303030', color: '#fff' }}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
          >
            <AccordionSummary sx={{ height: '75px', borderBottom: '1px solid black' }}
              id="panel3a-header"
              aria-controls="panel3a-content"
              expandIcon={
                expanded === 'panel3'
                  ?
                  <CloseIcon fontSize='large' sx={{ color: 'white' }} />
                  :
                  <AddIcon fontSize='large' sx={{ color: 'white' }}
                  />
              }
            >
              <Typography fontWeight='400' fontSize='26px'>Де можна дивитися контент?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'left', padding: '1.2em' }}>
              <Typography component='span' fontSize='26px' fontWeight='400'>
                Дивіться будь-де, будь-коли. Увійдіть у свій обліковий запис Netflix,
                щоб дивитися контент онлайн на сайті netflix.com з персонального комп’ютера
                або будь-якого пристрою з підключенням до Інтернету, на якому
                можна завантажити застосунок Netflix, як-от Smart TV, смартфон, планшет,
                медіапрогравач для потокової передачі або ігрова приставка.
                <br />
                <br />
                Крім того, ви можете завантажувати улюблені телешоу
                в застосунку для iOS, Android або Windows 10. Завантажуйте
                контент і дивіться його в дорозі навіть без підключення до Інтернету.
                Беріть Netflix із собою.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Section four */}

        <Box margin='8px auto' width='75%' maxWidth='815px'>
          <Accordion
            expanded={expanded === 'panel4'}
            sx={{ background: '#303030', color: '#fff' }}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')}
          >
            <AccordionSummary sx={{ height: '75px', borderBottom: '1px solid black' }}
              id="panel4a-header"
              aria-controls="panel4a-content"
              expandIcon={
                expanded === 'panel4'
                  ?
                  <CloseIcon fontSize='large' sx={{ color: 'white' }} />
                  :
                  <AddIcon fontSize='large' sx={{ color: 'white' }}
                  />
              }
            >
              <Typography fontWeight='400' fontSize='26px'>Як скасувати підписку?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'left', padding: '1.2em' }}>
              <Typography component='span' fontSize='26px' fontWeight='400'>
                Netflix надає гнучкі умови. Жодних надокучливих угод чи зобов’язань.
                Скасувати підписку можна всього за два кліки.
                Жодних комісій за скасування. Оформити або скасувати підписку можна будь-коли.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Section five */}

        <Box margin='8px auto' width='75%' maxWidth='815px'>
          <Accordion
            expanded={expanded === 'panel5'}
            sx={{ background: '#303030', color: '#fff' }}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel5')}
          >
            <AccordionSummary sx={{ height: '75px', borderBottom: '1px solid black' }}
              id="panel5a-header"
              aria-controls="panel5a-content"
              expandIcon={
                expanded === 'panel5'
                  ?
                  <CloseIcon fontSize='large' sx={{ color: 'white' }} />
                  :
                  <AddIcon fontSize='large' sx={{ color: 'white' }}
                  />
              }
            >
              <Typography fontWeight='400' fontSize='26px'>Що можна подивитися на Netflix?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'left', padding: '1.2em' }}>
              <Typography component='span' fontSize='26px' fontWeight='400'>
                Netflix пропонує обширну бібліотеку художніх фільмів,
                документалістики, телесеріалів, аніме,
                відзначеного нагородами оригінального контенту тощо.
                Дивіться скільки завгодно й коли завгодно.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Section six */}

        <Box margin='8px auto' width='75%' maxWidth='815px'>
          <Accordion
            expanded={expanded === 'panel6'}
            sx={{ background: '#303030', color: '#fff' }}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel6')}
          >
            <AccordionSummary sx={{ height: '75px', borderBottom: '1px solid black' }}
              id="panel6a-header"
              aria-controls="panel6a-content"
              expandIcon={
                expanded === 'panel6'
                  ?
                  <CloseIcon fontSize='large' sx={{ color: 'white' }} />
                  :
                  <AddIcon fontSize='large' sx={{ color: 'white' }}
                  />
              }
            >
              <Typography fontWeight='400' fontSize='26px'>Netflix підходить для дітей?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'left', padding: '1.2em' }}>
              <Typography component='span' fontSize='26px' fontWeight='400'>
                Інтерфейс Netflix для дітей включено у вашу підписку.
                Діти можуть насолоджуватися телесеріалами й фільмами для всієї родини у своєму профілі,
                а батьки при цьому контролюватимуть такий контент.
                <br />
                <br />
                Дитячі профілі захищаються батьківським контролем із PIN-кодом.
                Таким чином ви зможете ставити вікові обмеження на дитячий контент і блокувати певні
                найменування, щоб дитина їх не переглядала.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Section seven */}

        <Box margin='8px auto 52px' width='75%' maxWidth='815px'>
          <Accordion
            expanded={expanded === 'panel7'}
            sx={{ background: '#303030', color: '#fff' }}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel7')}
          >
            <AccordionSummary sx={{ height: '75px', borderBottom: '1px solid black' }}
              id="panel7a-header"
              aria-controls="panel7a-content"
              expandIcon={
                expanded === 'panel7'
                  ?
                  <CloseIcon fontSize='large' sx={{ color: 'white' }} />
                  :
                  <AddIcon fontSize='large' sx={{ color: 'white' }}
                  />
              }
            >
              <Typography fontWeight='400' fontSize='26px'>Чому відображається текст цією мовою?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: 'left', padding: '1.2em' }}>
              <Typography component='span' fontSize='26px' fontWeight='400'>
                Мову встановлено відповідно до налаштувань браузера.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Typography
            variant='h3'
            fontWeight='400'
            fontSize='19px'
            padding='0 5%'
            paddingBottom='20px'
            maxWidth='857px'
            margin='0 auto'
          >
            Готові до перегляду? Введіть адресу електронної пошти, щоб оформити або поновити підписку.
          </Typography>
          <Box>
            <TextField
              id='email'
              name='email'
              variant="outlined"
              label='Адреса електронної пошти'
              value={formik.values.email}
              onChange={formik.handleChange}
              sx={{
                width: '450px', color: 'black', fontSize: '16px',
                "& .MuiInputBase-root": {
                  background: '#fff',
                },
                "& .MuiFormHelperText-root": {
                  fontSize: '15px',
                  color: '#ffa00a'
                }
              }}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: '3px',
                fontSize: '23px',
                width: '168px',
                height: '56px',
                background: 'red',
                "&:hover": {
                  background: 'red'
                },
              }}
              type='submit'
            >
              Почати
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}

export default Questions;