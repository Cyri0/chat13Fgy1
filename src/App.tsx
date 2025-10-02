import { useEffect, useState } from "react"
import Sender from "./components/Sender"
import type { MessageType } from "./components/Message"
import { getMessages, startMessageStream } from "./services/messageService"
import Message from "./components/Message"

const App = () => {
  const [messages, setMessages] = useState<MessageType[]>([])
  
  useEffect(()=>{ getMessages().then(response => setMessages(response)) },[])
  
  useEffect(()=>{
    const source = startMessageStream()

    source.onmessage = (event) => {
      const newMessage:MessageType = JSON.parse(event.data)
      console.log(newMessage);
      
      setMessages(prev => [...prev,newMessage])
    }

    return () => source.close()
  },[])
  
  return (
    <div>
      <Sender />
      <section className="messages"
        style={{ 
          display: "flex",
          flexDirection: "column-reverse"
         }}
      >
        {messages.map(message => <Message key={message.id} {...message} />)}
      </section>
      
    </div>
  )
}

export default App