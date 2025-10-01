export type MessageType = {
    id: number,
    username: string,
    message: string,
    timestamp: string
}

const Message = (props: MessageType) => {
  const {message,timestamp,username} = props
  const time = new Date(timestamp)
  return (
    <div>
        <div className="top">
            <span>{username}</span>
            <span>
                {time.toLocaleDateString()}<br/>
                {time.toLocaleTimeString()}
            </span>
        </div>
        <p>{message}</p>
    </div>
  )
}

export default Message