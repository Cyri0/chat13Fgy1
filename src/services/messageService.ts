import type { MessageType } from "../components/Message"

export const BASE_URL = "https://4kqq873p-3000.euw.devtunnels.ms/"

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