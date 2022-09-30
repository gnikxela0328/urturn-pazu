import { useState, useEffect } from 'react'
import PowerCards from '../gameLayout/powerCards';
import Board from '../gameLayout/board'
import PlayerDisplay from '../gameLayout/playerDisplay'
import ScoreDisplay from '../gameLayout/scoreDisplay';
import Finished from '../pages/finished'



const Game = (props) => {

    const { board, turnNumber, playerOrder, messages, playerTurn, winner } = props.boardState

    const [playerData, setData] = useState({});


    useEffect(() => {
        let playerState = playerOrder.filter(player => {
            return player.id === props.localPlayer.id
        })
        setData(playerState[0])
    }, [props.boardState])



    return (
        <div className='flex max-h-screen flex-col w-screen items-center bg-[#2a303c] pt-7'>
            {props.finished ?
                <Finished winner={"ME"}/>
                :
                <>
                    {board &&
                        <div className='flex flex-col items-center w-screen'>
                            <div className='flex w-screen h-full'>
                                <PlayerDisplay players={playerOrder} messages={messages} currentPlayer={playerTurn} localPlayer={props.localPlayer} />
                                <Board board={board} />
                                <ScoreDisplay players={playerOrder} turnNumber={turnNumber} />
                            </div>
                            {playerData.cards &&
                                <div className='flex h-full w-[50%] align-middle py-10'>
                                    {playerData.cards.map(card => {
                                        //console.log(playerData.cards)
                                        return (
                                            <div className="card w-96 bg-base-100 shadow-xl">
                                                <div className="card-body items-center">
                                                    <PowerCards card={card} players={playerOrder} />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    }
                </>
            }

        </div>
    )
}

export default Game;

/*

<div className='flex h-full align-middle py-20'>
                {playerOrder.cards.map(card => {
                    return (
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body items-center">
                                <PowerCards card={'1'} />
                            </div>
                        </div>
                    )
                })}
            </div>

*/