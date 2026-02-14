import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "ðŸ“¡ Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `ðŸš€ Robert corazon💥 Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `Robert corazon 🌟`
        )
    }, { quoted: message })
}