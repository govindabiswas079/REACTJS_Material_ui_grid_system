import * as React from 'react';
import { styled } from '@mui/material/styles';
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

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={8} md={9}>
          <Item elevation={0}>xs=8</Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item elevation={0}>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
