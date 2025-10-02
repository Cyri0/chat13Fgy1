import { useEffect, useRef, useState } from "react"
import Sender from "./components/Sender"
import type { MessageType } from "./components/Message"
import { getMessages, startMessageStream } from "./services/messageService"
import Message from "./components/Message"

const App = () => {
  const [messages, setMessages] = useState<MessageType[]>([])
  const scrollPoint = useRef<HTMLDivElement>(null)
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
  
  useEffect(()=>{
    if(!scrollPoint.current) return
    scrollPoint.current.scrollIntoView()
  },[messages])
  
  return (
    <div>
      <section className="messages">
        {messages.map(message => <Message key={message.id} {...message} />)}
        <div ref={scrollPoint}></div>
      </section>
      <Sender />
    </div>
  )
}

export default App