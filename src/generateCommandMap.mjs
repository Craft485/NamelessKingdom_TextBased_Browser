import fs from 'fs'

fs.readdir('./out', (err, files) => {
    if (err) throw err

    fs.writeFileSync('./commands.map.mjs', 'export const commandMap = {', (err) => { if (err) throw err })

    files.forEach(async (file) => {
        if (file.endsWith('.js')) {
            await import(`./out/${file}`).then(v => {
                fs.writeFileSync('./commands.map.mjs', `\n\t${file.split('.')[0]}: {\n\t\targs: ${v.args || null},\n\t\texecute: ${v[file.split('.')[0]]}\n\t},`, { flag: 'a' }, (err) => { if (err) throw err }) 
            })
            .catch(e => { throw e })
            
            if (files.join().endsWith(file)) {
                fs.writeFileSync('./commands.map.mjs', '\n};', { flag: 'a' }, (err) => { if (err) throw err })
            }
        }
    })
})
