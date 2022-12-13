import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

const Footer: React.FC = () => {
  const [selected, setSelected] = useState<string>('English');

  const listItems1 = [
    { text: 'FAQ', href: '/' },
    { text: 'Help Center', href: '/' },
    { text: 'Terms of Use', href: '/' },
    { text: 'Privacy', href: '/' },
    { text: 'Cookie Preferences', href: '/' },
    { text: 'Corporate Information', href: '/' },
  ];

  const listItems2 = [
    { text: 'FAQ', href: '/' },
    { text: 'Help Center', href: '/' },
    { text: 'Account', href: '/' },
    { text: 'Media Center', href: '/' },
    { text: 'Investor Relations', href: '/' },
    { text: 'Jobs', href: '/' },
    { text: 'Ways to Watch', href: '/' },
    { text: 'Terms of Use', href: '/' },
    { text: 'Privacy', href: '/' },
    { text: 'Cookie Preferences', href: '/' },
    { text: 'Corporate Information', href: '/' },
    { text: 'Contact Us', href: '/' },
    { text: 'Speed Test', href: '/' },
    { text: 'Legal Notices', href: '/' },
    { text: 'Only on Netflix', href: '/' },
  ];

  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '/sign-in')
    return (
      <Box
        sx={{
          background: 'rgba(0,0,0,.75)',
          maxWidth: '100%',
          maxHeight: '258px',
          padding: '30px 45px',
        }}
      >
        <Box sx={{ maxWidth: '1000px', margin: '0 auto', width: '90%' }}>
          <Typography
            component="p"
            sx={{ color: '#737373', marginBottom: '30px' }}
          >
            Questions? Call
            <Link
              color="inherit"
              href="tel:0800-509-416"
              underline="hover"
              marginLeft="5px"
            >
              0800-509-416
            </Link>
          </Typography>
          <List disablePadding>
            {listItems1.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'inline-block',
                  width: '25%',
                  padding: '0 12px 0 0',
                  marginBottom: '16px',
                  maxHeight: '16px',
                }}
              >
                <ListItemText sx={{ margin: '0' }}>
                  <Link
                    href={item.href}
                    component="a"
                    underline="hover"
                    sx={{ color: '#737373', fontSize: '13px' }}
                  >
                    {item.text}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <Box width="144px" marginTop="20px">
            <FormControl variant="filled" fullWidth>
              <Select
                displayEmpty
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                sx={{
                  '&.MuiInputBase-root': {
                    background: '#000000',
                    color: '#737373',
                    border: '1px solid #737373',
                    fontSize: '13px',
                    maxHeight: '48px',
                    padding: '12px 4px 23px 24px',
                  },
                }}
              >
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'Українська'}>Українська</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    );
  return (
    <Box
      sx={{
        padding: '70px 45px 12px 45px',
        fontSize: '13px',
        color: '#737373',
        backgroundColor: '#000',
      }}
    >
      <Box sx={{ maxWidth: '1000px', margin: '0 auto', width: '90%' }}>
        <Typography component="p" sx={{ marginBottom: '30px' }}>
          Questions? Call
          <Link
            color="inherit"
            href="tel:0800-509-416"
            underline="hover"
            marginLeft="5px"
          >
            0800-509-416
          </Link>
        </Typography>
        <List disablePadding>
          {listItems2.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'inline-block',
                width: '25%',
                padding: '0 12px 0 0',
                marginBottom: '16px',
                maxHeight: '16px',
              }}
            >
              <ListItemText sx={{ margin: '0' }}>
                <Link
                  href={item.href}
                  component="a"
                  underline="hover"
                  sx={{ color: '#737373', fontSize: '13px', cursor: 'pointer' }}
                >
                  {item.text}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Box width="163px" marginTop="20px">
          <FormControl variant="filled" fullWidth>
            <Select
              displayEmpty
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              sx={{
                '&.MuiInputBase-root': {
                  background: '#000000',
                  color: '#737373',
                  border: '1px solid #737373',
                  fontSize: '13px',
                  maxHeight: '48px',
                  padding: '12px 4px 23px 32px',
                },
              }}
            >
              <MenuItem value={'English'}>English</MenuItem>
              <MenuItem value={'Українська'}>Українська</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Typography component="p" marginTop="24px">
          Netflix Ukraine
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
