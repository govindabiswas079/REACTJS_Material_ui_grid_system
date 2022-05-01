import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'none',
  border: '0.1px solid blue'
}));

export default function ResponsiveGrid() {
  return (
    <Box /* sx={{ flexGrow: 1 }} */>
      <Grid container justifyContent="center" spacing={2}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Item elevation={0}>xs=2</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
