const { exec } = require('child_process')

const token = process.env.TOKEN || ''
const command = `PORT=7070 REACT_APP_TOKEN=${token} react-scripts start`

exec(command, (error) => {
  if (error) {
    console.error(`Ошибка при выполнении команды: ${error}`)
    return
  }
})
