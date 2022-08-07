const ScoreDisplay = (props) => {
    return (
        <div className='w-full flex flex-col items-center justify-between  py-[5rem]'>
            <div className="flex flex-col items-center">
                <p className="text-2xl mb-5">
                    Scores
                </p>
                <div className="flex flex-col items-start space-y-6">
                    {props.players.map(player => {
                        return (
                            <div key={player.username} className="text-xl">
                                {player.score}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <p className="text-2xl mb-5">
                    Turn
                </p>
                <p className="text-xl">
                    {props.turnNumber + 1}
                </p>
            </div>
        </div>
    )
}

export default ScoreDisplay;