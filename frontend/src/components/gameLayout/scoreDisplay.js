const ScoreDisplay = (props) => {
    return (
        <div className='w-full flex flex-col items-start pl-8 pr-8 justify-between'>
            <div className="h-1/2">
                <p className="text-2xl mb-5">
                    Turn
                </p>
                <div className="flex bg-gray-900 rounded-lg justify-center">
                    <p className="text-xl">
                        {props.turnNumber + 1}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-start bg-[#242933] rounded-lg h-1/2 w-full justify-evenly">
                <div className="flex items-center w-full h-full align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left-right w-1/6 h-[30%]" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <div>
                        <p className="text-lg">Move First</p>
                        <p className="text-sm">Ur First! Move to the front of the line for the next turn</p>
                    </div>
                </div>
                <div className="flex items-center w-full h-full align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plus-slash-minus w-1/6 h-[30%]" viewBox="0 0 16 16">
                        <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z" />
                    </svg>
                    <div>
                        <p className="text-lg">Invert</p>
                        <p className="text-sm">Invert this players score for one turn</p>
                    </div>
                </div>
                <div className="flex items-center w-full h-full align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x w-1/6 h-[40%]" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <div>
                        <p className="text-lg">Multiply</p>
                        <p className="text-sm">Multiply this players score 2X for one turn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreDisplay;