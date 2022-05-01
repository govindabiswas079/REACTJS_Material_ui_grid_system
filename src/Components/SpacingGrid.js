import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'none',
  border: '0.1px solid blue'
}));

export default function SpacingGrid() {

  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={24}>
          <Grid container justifyContent="center" spacing={2} columns={10}>
            {[0, 1, 2, 3, 4, 5, 67, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,].map((value) => (
              <Grid key={value} item xs={12} sm={3} md={2}>
                <Item elevation={0} >{value}</Item>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}


/*  */