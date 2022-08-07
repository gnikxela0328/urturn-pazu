import client from "@urturn/client";

const BoxIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-8" viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
        </svg>
    )
}

const Board = (props) => {
    return (
        <>
            <table className="table w-full">
                <tbody>
                    {props.board.map(row => {
                        //console.log(row)
                        return (
                            <tr key={row[0].coordinate[0]}>
                                <td className='border-yellow-500 border-r border-l border-b border-t'>
                                    <div onClick={e => {
                                        e.preventDefault()
                                        client.makeMove({
                                            type: "REVEAL",
                                            coordinate: row[0].coordinate
                                        })
                                    }} className="flex justify-center">
                                        {row[0].found ? row[0].name : <BoxIcon />}
                                    </div>
                                </td>
                                <td className='border-yellow-500 border-r border-l border-b border-t'>
                                    <div onClick={e => {
                                        e.preventDefault()
                                        client.makeMove({
                                            type: "REVEAL",
                                            coordinate: row[1].coordinate
                                        })
                                    }} className="flex justify-center">
                                        {row[1].found ? row[1].name : <BoxIcon />}
                                    </div>
                                </td>
                                <td className='border-yellow-500 border-r border-l border-b border-t'>
                                    <div onClick={e => {
                                        e.preventDefault()
                                        client.makeMove({
                                            type: "REVEAL",
                                            coordinate: row[2].coordinate
                                        })
                                    }} className="flex justify-center">
                                        {row[2].found ? row[2].name : <BoxIcon />}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Board;