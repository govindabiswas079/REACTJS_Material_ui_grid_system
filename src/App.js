import React from 'react';
import SpacingGrid from './Components/SpacingGrid';
import RowAndColumnSpacing from './Components/RowAndColumnSpacing';
import ResponsiveGrid from './Components/ResponsiveGrid';
import BasicGrid from './Components/BasicGrid';
import { Container } from '@mui/material';

function App() {

  return (
    <>
      <Container>
        <SpacingGrid />
        <br />
        <RowAndColumnSpacing />
        <br />
        <ResponsiveGrid />
        <br />
        <BasicGrid />
      </Container>
    </>
  );
}

export default App;
/*  "homepage": "https://FidalMathew.github.io/Portfolio", */