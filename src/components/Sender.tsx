import { useState } from "react"
import { sendPostMessage } from "../services/messageService"

const Sender = () => {
  const [message, setMessage] = useState("")
  
  const sendMessage = () => {
    if(message.length > 0)
        sendPostMessage("Tomi bácsi", message)
  }

  return (
    <section className="sender">
        <input
            type="text"
            value={message}
            onChange={(e) => {setMessage(e.target.value)}}
        />
        <button onClick={sendMessage}>🚀</button>
    </section>
  )
}

export default Sender