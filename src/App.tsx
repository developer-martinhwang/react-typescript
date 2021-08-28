import {FC, useState} from 'react';
import './App.css';
// @material ui/core
import { Box, Typography, Button } from '@material-ui/core';

const App: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <Box className="App">
      <Typography variant="h1">{counter}</Typography>
      <Button onClick={() => {setCounter(counter + 1)}}>Increase</Button>
      <Button onClick={() => {setCounter(counter - 1)}}>Increase</Button>
    </Box>
  );
}

export default App;
