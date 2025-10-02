export type MessageType = {
    id: number,
    username: string,
    message: string,
    timestamp: string
}

const Message = (props: MessageType) => {
  const {id,message,timestamp,username} = props
  const time = new Date(timestamp)
  return (
    <div className="message">
        <div className="top">
            <span>{username}<br/>#{id}</span>
            <span>
                {time.toLocaleDateString()}<br/>
                {time.toLocaleTimeString()}
            </span>
        </div>
        <div dangerouslySetInnerHTML={{__html: message}}></div>
    </div>
  )
}

export default Message