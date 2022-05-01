import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'none',
  border: '0.1px solid blue'
}));

export default function RowAndColumnSpacing() {
  return (
      <Box sx={{ width: '100%' }}>
        <Grid container justifyContent="center" spacing={3}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item xs={12} md={6} sm={6} >
              <Item elevation={0}>{value}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
}


/* <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid> */