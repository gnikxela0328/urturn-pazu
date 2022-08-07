import client from '@urturn/client';

const PowerCards = (props) => {

    //function disableButton

    switch (props.card.type) {
        case 'first':
            return (
                <>
                    <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                        </svg>
                        <h2 className="card-title">Go First</h2>
                    </div>
                    <p>Ur First! Move to the front of the line for the next turn</p>
                    <div className="flex overflow-y-auto">
                        {props.players.map(player => {
                            console.log(props.card)
                            return (
                                <button onClick={e => {
                                    e.preventDefault()
                                    client.makeMove({
                                        type: "CARD",
                                        value: "FIRST",
                                        target: player.id,
                                        card_id: props.card.card_id
                                    })
                                }} className="btn btn-outline btn-primary text-xs">{player.gameName}</button>
                            )
                        })}
                    </div>
                </>
            )
        case 'invert':
            return (
                <>
                    <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-slash-minus" viewBox="0 0 16 16">
                            <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z" />
                        </svg>
                        <h2 className="card-title">Invert Score</h2>
                    </div>
                    <p>Invert this turns score</p>
                    <div className="flex overflow-y-auto">
                        {props.players.map(player => {
                            console.log(props.card)
                            return (
                                <button onClick={e => {
                                    e.preventDefault()
                                    client.makeMove({
                                        type: "CARD",
                                        value: "INVERT",
                                        target: player.id,
                                        card_id: props.card.card_id
                                    })
                                }} className="btn btn-outline btn-primary text-xs">{player.gameName}</button>
                            )
                        })}
                    </div>
                </>
            )
        case 'multiply':
            return (
                <>
                    <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <h2 className="card-title">Multiply Score</h2>
                    </div>
                    <p>Multiply this turns score by 2X</p>
                    <div className="flex overflow-y-auto">
                        {props.players.map(player => {
                            console.log(props.card)
                            return (
                                <button onClick={e => {
                                    e.preventDefault()
                                    client.makeMove({
                                        type: "CARD",
                                        value: "MULTIPLY",
                                        target: player.id,
                                        card_id: props.card.card_id
                                    })
                                }} className="btn btn-outline btn-primary text-xs">{player.gameName}</button>
                            )
                        })}
                    </div>
                </>
            )
        default:
            return (
                <>
                </>
            )
    }
}

export default PowerCards;