import { commandMap } from './commands.map.mjs'

const input  = document.querySelector('#input')
const output = document.querySelector('#text-display')

async function onCommandEvent() {
    // @ts-ignore
    const parts: string[] = input.value.split(' ')
    const command: string | undefined = parts.shift()?.toLowerCase()
    const isValidCommand = Object.keys(commandMap).find((cmd: string) => cmd === command)
    // @ts-ignore
    input.value = ''
    const o = document.createElement('p')
    o.innerText = `$ ${isValidCommand ? `${command} ${parts.join(' ')}\n${await commandMap[command].execute() || 'An error occured'}` : `'${command}' is not a valid command, use 'help' to view a list of available commands.`}`
    output?.prepend(o)
    output?.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
}

window.addEventListener("keydown", e => {
    // @ts-ignore
    if (e.key === 'Enter' && input.value?.length > 0) { 
        onCommandEvent() 
    } else if (!document.activeElement || document.activeElement?.id !== 'input') { 
        // @ts-ignore
        input.focus()
    }
})

// @ts-ignore
window.onload = () => input?.focus()
// For debugging purposes
console.log(commandMap)