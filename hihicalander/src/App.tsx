import { useEffect, useState } from 'react';
import './App.css';
import ButtonAndCount from './sections/ButtonAndCount';
import PieGraph from './sections/PieGraph';
import LineGraph from './sections/LineGraph';
import { getDateStr } from './logic/Util';
import { BlueBoxes } from './logic/BlueBox';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function App() {

  const [showDate, setShowDate] = useState(new Date())
  const [blueBoxes, setBlueBoxes] = useState<BlueBoxes>(new BlueBoxes({}))

  const writeLocal = (blueBoxes: BlueBoxes) => {
    const sel = JSON.stringify(blueBoxes.dateDropDict);
    localStorage.setItem('drops', sel);
  }

  const readLocal = () => {
    const readData = localStorage.getItem('drops');

    if (readData === null) {
      return;
    }

    const parseData = JSON.parse(readData)

    const readedBlueBox = new BlueBoxes(parseData)

    setBlueBoxes(readedBlueBox)
  }

  useEffect(readLocal, []);

  const theme = createTheme({
    palette: {
      background: {
        paper: '#fafafa',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },

    },
    typography: {
      fontSize: 24,
    },
  });


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div>
          <Container component={Paper} sx={{ marginTop: 2 }}>
            <ButtonAndCount writeLocal={writeLocal} blueBoxes={blueBoxes} setBlueBoxes={setBlueBoxes} showDate={showDate} setShowDate={setShowDate} />
          </Container>
          <Container component={Paper} sx={{ marginTop: 2, marginBottom: 2 }}>
            <PieGraph blueBoxes={blueBoxes} showDate={showDate} />
          </Container>
          <Container component={Paper} sx={{ marginTop: 2, marginBottom: 2 }}>
            <LineGraph blueBoxes={blueBoxes} />
          </Container>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
