// TicTacToe Example
/**
 * Generic board game types
 * @type Player: json object, in the format of
 * {
 *  id: string, unique player id
 *  username: string, the player's display name
 * }
 * @type BoardGame: json object, in the format of
 * {
 *  // creator read write fields
 *  state: json object, which represents any board game state
 *  joinable: boolean (default=true), whether or not the room can have new players added to it
 *  finished: boolean (default=false), when true there will be no new board game state changes
 *
 *  // creator read only
 *  players: [Player], array of player objects
 *  version: Number, an integer value that increases by 1 with each state change
 * }
 * @type BoardGameResult: json object, in the format of
 * {
 *  // fields that creator wants to overwrite
 *  state?: json object, which represents any board game state
 *  joinable?: boolean, whether or not the room can have new players added to it
 *  finished?: boolean, when true there will be no new board game state changes
 * }
 */

/**
 * onRoomStartmpty"
 * @returns {BoardGameResult}
 */


function onRoomStart() {
  ////console.log("onRoomStart")

  // Determine 9 random placements of +1 and -1
  // fill the rest with null

  // board = [0-8][0-2]

  let board = [
    [{ "name": "empty", "found": false, coordinate: [0, 0] }, { "name": "empty", "found": false, coordinate: [0, 1] }, { "name": "empty", "found": false, coordinate: [0, 2] }],
    [{ "name": "empty", "found": false, coordinate: [1, 0] }, { "name": "empty", "found": false, coordinate: [1, 1] }, { "name": "empty", "found": false, coordinate: [1, 2] }],
    [{ "name": "empty", "found": false, coordinate: [2, 0] }, { "name": "empty", "found": false, coordinate: [2, 1] }, { "name": "empty", "found": false, coordinate: [2, 2] }],
    [{ "name": "empty", "found": false, coordinate: [3, 0] }, { "name": "empty", "found": false, coordinate: [3, 1] }, { "name": "empty", "found": false, coordinate: [3, 2] }],
    [{ "name": "empty", "found": false, coordinate: [4, 0] }, { "name": "empty", "found": false, coordinate: [4, 1] }, { "name": "empty", "found": false, coordinate: [4, 2] }],
    [{ "name": "empty", "found": false, coordinate: [5, 0] }, { "name": "empty", "found": false, coordinate: [5, 1] }, { "name": "empty", "found": false, coordinate: [5, 2] }],
    [{ "name": "empty", "found": false, coordinate: [6, 0] }, { "name": "empty", "found": false, coordinate: [6, 1] }, { "name": "empty", "found": false, coordinate: [6, 2] }],
    [{ "name": "empty", "found": false, coordinate: [7, 0] }, { "name": "empty", "found": false, coordinate: [7, 1] }, { "name": "empty", "found": false, coordinate: [7, 2] }],
    [{ "name": "empty", "found": false, coordinate: [8, 0] }, { "name": "empty", "found": false, coordinate: [8, 1] }, { "name": "empty", "found": false, coordinate: [8, 2] }]
  ]

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  // Randomly assigns state to board
  for (x in board) {
    row = board[x]
    ////console.log(row)
    pass = getRandom(3)
    fail = getRandom(3)
    row[pass] = { ...row[pass], 'name': 'plus' }
    row[fail] = { ...row[fail], 'name': 'minus' }
  }

  return {
    state: {
      board: board,
      winner: null,

      // current turn in game
      turnNumber: 0,
      // constant turn max
      turnMax: 5,
      // queue of players. Holds player json object
      // player: {name, score, cards, turnEffects}
      playerOrder: [],
      // binary encoding of player moves taken
      playersMoved: 0,
      // waiting for players
      waiting: true,
      // Who's turn is it?
      playerTurn: {},
      // game log
      messages: '',
      winner: []

    }

  };
}

/**
 * onPlayerJoin
 * @param {Player} player, represents the player that is attempting to join this game
 * @param {BoardGame} currentGame
 * @returns {BoardGameResult}
 */
function onPlayerJoin(player, boardGame) {
  ////console.log("onPlayerJoin", player, boardGame)
  const { players, state } = boardGame;

  // player max
  if (players.length === 5) {
    return { joinable: false }
  }


  // Add new player to state
  if (boardGame.joinable) {
    // Name Gen
    let namesOne = ['franco', 'telemarchus', 'ginger', 'ruby', 'alfonse', 'ariel', 'czar', 'bandit', 'flying']
    let namesTwo = ['xanthum', 'telegram', 'lambda', 'liverpool', 'loud', 'the-philosopher', 'mcCoy', 'mark II', 'father']

    let idxOne = randomNumber(9)
    let idxTwo = randomNumber(9)

    let newPlayer = {
      id: player.id,
      username: player.username,
      gameName: namesOne[idxOne] + ' ' + namesTwo[idxTwo],
      score: 0,
      cards: [],
      turnEffects: []
    }

    state.playerOrder.push(newPlayer)
  }

  return { state };
}

////////////////////////////////

/**
 * 
 * HELPER FUNCTIONS
 */

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function randomCard() {
  let cards = [{
    'type': 'invert',
    'target': 'none',
    'card_id': randomNumber(9999)
  }, {
    'type': 'multiply',
    'target': 'none',
    'card_id': randomNumber(9999)
  }, {
    'type': 'first',
    'target': 'none',
    'card_id': randomNumber(9999)
  }]

  return cards[randomNumber(3)]
}

function checkValid(id_one, id_two) {
  if (id_one !== id_two) {
    //console.log('invalid move')
    return false
  }

  return true
}


///////////////////////////////////////////////

/**
 * 
 * GAME MOVES
 */


function gameMoveStart(state) {

  try {
    if (state.playerOrder.length > 1) {

      state.waiting = false;

      state.playerOrder = shuffle(state.playerOrder)

      state.playerTurn = state.playerOrder[0]

      state.messages += "\n- Game has started!"

      return true
    }
  } catch (error) {
    //console.log(error)
    return false
  }

}

function gameMoveReveal(player, move, boardGame) {

  const { state } = boardGame;

  //console.log('moving')

  let playerData = state.playerOrder[state.playersMoved]

  // retrieve cell chosen
  row = move.coordinate[0]
  column = move.coordinate[1]
  cell = state.board[row][column]

  // Cell marked as found
  state.board[row][column].found = true

  let message = "\n- " + playerData.gameName + " has uncovered " + cell.name
  state.messages += message

  let effects = []
  
  for (x in playerData.turnEffects) {
    if (playerData.turnEffects[x] === 'INVERT') {
      effects.push(-1)
    } else if (playerData.turnEffects[x] === 'MULTIPLY') {
      effects.push(2)
    }
  }

  
  //console.log('here')

  if (cell.name === 'plus') {
    let score = 1

    for (x in effects) {
      if (effects[x] == -1) {
        score = score * -1
      } else if (effects[x] == 2) {
        score = score * 2
      }
    }
    
    state.playerOrder[state.playersMoved].score += score
    //console.log('got plus')

  } else if (cell.name === 'minus') {
    // add turn effects to score
    // add score

    let score = -1

    for (x in effects) {
      if (effects[x] == -1) {
        score = score * -1
      } else if (effects[x] == 2) {
        score = score * 2
      }
    }
    
    state.playerOrder[state.playersMoved].score += score
    //console.log('got minus')
  } else if (cell.name === 'empty') {
    // add turn effects to score
    // add score
    //console.log('got empty')
  }

  // Move has been made
  state.playersMoved++

  ////console.log(state.playersMoved)
  ////console.log(state.playerOrder.length)


  // Computer cleanup /////////////////
  if (state.playersMoved === state.playerOrder.length) {

    // Check for win
    if (state.turnNumber === state.turnMax) {
      //let win = true

      let winningScore = 0
      for (x in state.playerOrder) {
        if (state.playerOrder[x].score > winningScore) {
          winningScore = state.playerOrder[x].score
        }
      }

      for (x in state.playerOrder) {
        if (state.playerOrder[x].score === winningScore) {
          state.winner.push(state.playerOrder[x].gameName)
        }
      }

      state.messages += "\n- Game is finished!"
      return { finished: true }
    } else {


      // reset moves
      state.playersMoved = 0;

      // Get UrFirst cards
      let firstQueue = []
      let elseQueue = []

      for (x in state.playerOrder) {
        if (state.playerOrder[x].turnEffects.includes('FIRST')) {
          firstQueue.push(state.playerOrder[x])
        } else {
          elseQueue.push(state.playerOrder[x])
        }
      }

      // shuffle player order
      firstQueue = shuffle(firstQueue)
      elseQueue = shuffle(elseQueue)

      //console.log(firstQueue)
      //console.log(elseQueue)

      state.playerOrder = []
      
      // fill new order
      for (x in firstQueue){
        state.playerOrder.push(firstQueue[x])
      }

      for (x in elseQueue){
        state.playerOrder.push(elseQueue[x])
      }

      // increment turn count
      state.turnNumber++
      ////console.log(state.turnNumber)

      // Distribute cards
      // reset turnEffects
      for (x in state.playerOrder) {
        ////console.log('resseting effects')
        state.playerOrder[x].turnEffects = []
        state.playerOrder[x].cards.push(randomCard())
      }

      ////console.log(state.playerOrder)

      // Set new player turn
      state.playerTurn = state.playerOrder[0]

      let message = "\n- Player order shuffled!\n- Effects released!\n- Cards distributed!"
      state.messages += message

      ////console.log(state.messages)
    }

    ////console.log(state)

    return true
  } else {
    state.playerTurn = state.playerOrder[state.playersMoved]
    return true
  }
}

function gameMoveCard(player, move, boardGame) {
  const { state } = boardGame;

  ////console.log('card')
  //console.log(move)


  let playerIndex = state.playerOrder.findIndex(sender => {
    return sender.id === player.id
  })

  let card = state.playerOrder[playerIndex].cards.filter(card => {
    return card.card_id !== move.card_id
  })

  if (card === []) {
    return {}
  }

  let targetIndex = state.playerOrder.findIndex(target => {
    return target.id === move.target
  })

  ////console.log(state.playerOrder)
  ////console.log(targetIndex)
  ////console.log(playerIndex)

  state.playerOrder[targetIndex].turnEffects.push(move.value)
  //console.log(state.playerOrder[playerIndex].cards)
  state.playerOrder[playerIndex].cards = state.playerOrder[playerIndex].cards.filter(card => {
    return card.card_id !== move.card_id
  })

}

///////////////////////////////////////////////

/**
 * onPlayerMove
 * @param {Player} player, the player that is attempting to make a move
 * @param {*} move json object, controlled the creator that represents the player's move
 * @param {BoardGame} currentGame
 * @returns {BoardGameResult}
 */
function onPlayerMove(player, move, boardGame) {
  ////console.log("onPlayerMove", player, move, boardGame)

  const { type } = move;
  const { state } = boardGame;

  switch (type) {
    case "START":
      //console.log('starting')
      if (gameMoveStart(state)) {
        //console.log(state)
        return { joinable: false }
      } else {
        return {}
      }
    case "REVEAL":
      if (!checkValid(player.id, state.playerTurn.id)) {
        return {}
      }
      if (gameMoveReveal(player, move, boardGame)) {
        return { state }
      } else {
        return {}
      }
    case "CARD":
      if (!checkValid(player.id, state.playerTurn.id)) {
        return {}
      }
      gameMoveCard(player, move, boardGame)
      return { state }
    default:
      return {}
  }

}

/**
 * onPlayerQuit
 * @param {Player} player, the player that is attempting to quit the game
 * @param {BoardGame} currentGame
 * @returns {BoardGameResult}
 */
function onPlayerQuit(player, boardGame) {
  //console.log("onPlayerQuit", player, boardGame)

  const { state } = boardGame;

  state.playerOrder = state.playerOrder.filter(user => {
    return user.id != player.id
  })

  return {};
}

module.exports = {
  onRoomStart,
  onPlayerJoin,
  onPlayerMove,
  onPlayerQuit,
};
