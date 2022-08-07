import client from '@urturn/client';

const Waiting = (props) => {

    //console.log('hello')

    const players = props.boardState.playerOrder || []


    return (

        <div className="flex flex-col w-screen h-screen justify-center items-center ">
            {players ?
                <div className="space-y-20 flex flex-col items-center">
                    <div className="space-y-7">
                        {players.map(player => {
                            return (
                                <div key={player.username} >
                                    <p className="text-sm">
                                        {player.username}
                                    </p>
                                    <p className="text-4xl text-white">
                                        {player.gameName}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <button onClick={e => {
                            e.preventDefault()
                            client.makeMove({
                                type: "START"
                            })
                        }} className="btn btn-wide">Start</button>
                    </div>
                    <div>
                        Waiting
                    </div>
                </div>
                :
                <div>

                </div>
            }
        </div>
    )
}

export default Waiting;