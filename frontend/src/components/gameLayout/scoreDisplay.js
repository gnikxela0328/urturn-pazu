const ScoreDisplay = (props) => {
    return (
        <div className='w-full flex flex-col items-start pl-8 pr-8 justify-between'>
            <div>
                <p className="text-2xl mb-5">
                    Turn
                </p>

                <div></div>
                <p className="text-xl bg-gray-900 rounded-lg">
                    {props.turnNumber + 1}
                </p>
            </div>
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
        </div>
    )
}

export default ScoreDisplay;