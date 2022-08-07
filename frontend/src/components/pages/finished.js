import client from '@urturn/client';

const Finished = (props) => {

    return (

        <div className="flex flex-col w-screen h-screen justify-center items-center ">
            WINNER: {props.winner}
        </div>
    )
}

export default Finished;