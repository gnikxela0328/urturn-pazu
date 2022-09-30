import { useState } from 'react'
import Messages from "./messages";

const PlayerDisplay = (props) => {

    return (
        <div className='w-full flex flex-col items-start'>
            <div className='pl-8 pr-8 h-2/3 w-full'>
                <p className="text-2xl mb-5">
                    Players
                </p>
                <div className="flex flex-col items-start space-y-3">
                    {props.players.map(player => {
                        return (
                            <div key={player.username} className="flex w-full justify-between">
                                <div className='flex items-center space-x-3'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={props.currentPlayer.username === player.username ? "bi bi-caret-right h-5 fill-red-500" : "bi bi-caret-right h-5 fill-transparent"} viewBox="0 0 16 16">
                                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg">
                                            {player.gameName}
                                        </p>
                                        <p className="text-xs">
                                            {player.username} {player.username === props.localPlayer.username ? "(you)" : ""}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center text-lg'>
                                    {player.score}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='pl-8 h-1/3 w-full'>
                <p className="text-2xl mb-5">
                    Game Log
                </p>
                <Messages messages={props.messages} />
            </div>
        </div>
    )
}

export default PlayerDisplay;