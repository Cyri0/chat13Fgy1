import type { MessageType } from "../components/Message"

export const BASE_URL = import.meta.env.VITE_BASE_URL

export async function getMessages(){   
    try {
        const res = await fetch(BASE_URL + "messages")
        const messages: MessageType[] = await res.json()
        return messages
    } catch (error) {
        console.error(error);
        return []
    }
}

export async function sendPostMessage(username: string, message: string){
    try {
        const res = await fetch(BASE_URL + "messages", {
            method: "POST",
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify({username, message})
        })
        const sentMessage: MessageType = await res.json()
        return sentMessage
    } catch (error) {
        console.error(error);
        return null
    }
}

export function startMessageStream(){
    const source = new EventSource(BASE_URL + "stream")
    
    source.onerror = (error) => { console.error(error); }

    return source
}