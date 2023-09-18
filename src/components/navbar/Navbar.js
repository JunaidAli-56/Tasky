import * as React from 'react';
import { Navbar, Text } from '@nextui-org/react';
import { Box } from './Box.js';
import { AcmeLogo } from './AcmeLogo.js';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function myNavbar() {
  return (
    <Box
      css={{
        maxW: '100%',
      }}
    >
      <Navbar
        isBordered
        variant="sticky"
      >
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%',
            },
          }}
        >
          <AcmeLogo />
          <Text
            b
            color="inherit"
            hideIn="xs"
          >
            Tasky
          </Text>
        </Navbar.Brand>

        <Navbar.Content
          css={{
            '@xs': {
              w: '12%',
              jc: 'flex-end',
            },
          }}
        >
          {/* <Button>Login</Button> */}
          <Button
            size="small"
            variant="contained"
          >
            <Link to={'/auth/login'} className='mt-1 px-3 text-decoration-none text-white'>Login</Link>
          </Button>
        </Navbar.Content>
      </Navbar>
    </Box>
  );
}
