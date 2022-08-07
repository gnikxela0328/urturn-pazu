import React, { useState, useEffect } from 'react';
import { ThemeProvider, Typography } from '@mui/material';

import Waiting from './components/pages/waiting';
import Game from './components/pages/game';

import client, { events } from '@urturn/client';
import theme from './theme';
import './assets/output/output.css';

function App() {

  const [boardGame, setBoardGame] = useState(client.getBoardGame() || {});

  // Loading screen
  const [waiting, setWaiting] = useState(true);
  
  // Who am I
  const [localPlayer, setPlayer] = useState('');

  useEffect(() => {
    const onStateChanged = (newBoardGame) => {
      setBoardGame(newBoardGame);
    };
    const getLocalPlayer = async () => {
      setPlayer(await client.getLocalPlayer());
    };

    getLocalPlayer();
    events.on('stateChanged', onStateChanged);
    return () => {
      events.off('stateChanged', onStateChanged);
    };
  }, []);

  // ------------------------------------------------------------------------

  const boardState = boardGame.state || {}

  useEffect(() => {
    if (boardState.waiting == false) {
      setWaiting(false)
    }
  })

  console.log(boardGame)

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        {boardState !== {} &&
          <>
            {waiting ?
              <Waiting boardState={boardState} />
              :
              <Game boardState={boardState} localPlayer={localPlayer} finished={boardGame.finished} />
            }
          </>
        }
      </Typography>
    </ThemeProvider>
  );
}

export default App;

/*

*/
