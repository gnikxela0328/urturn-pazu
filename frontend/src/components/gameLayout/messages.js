import { useEffect } from "react";

const Messages = (props) => {

    useEffect(() => {
        let textarea = document.getElementById('messages');
        textarea.scrollTop = textarea.scrollHeight;
        console.log("Got:")
        console.log(textarea)
    }, [props.messages]);

    return (
        <div className="w-full h-full pr-8">
            <textarea className="textarea textarea-warning w-full h-[16vh]" disabled placeholder="Events" id="messages" value={props.messages} ></textarea>
        </div>
    )
}

export default Messages