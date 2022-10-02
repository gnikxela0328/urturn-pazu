const Finished = (props) => {
    return (

        <div className="flex flex-col w-screen h-screen justify-center items-center space-y-7">
            <p className="text-4xl text-white">WINNER</p>
            {props.winner.map(player => {
                return (
                    <div className="flex flex-col items-center">
                        <p className="text-lg" >{player.gameName}</p>
                        <p className="text-sm" >{player.userName}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Finished;