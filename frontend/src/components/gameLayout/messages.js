const Messages = (props) => {
    return (
        <textarea className="textarea textarea-warning" disabled placeholder="Events" value={props.messages} ></textarea>
    )
}

export default Messages