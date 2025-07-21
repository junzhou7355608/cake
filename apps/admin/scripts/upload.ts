import { exec } from 'child_process'
import logSymbols from 'log-symbols'

const remoteUser = 'root'
const remoteHost = '43.139.108.151'
const remotePath = '/www/wwwroot/lyy-cake-admin.shop'
const sshKeyPath = '~/.ssh/id_rsa'

const command = `scp -i ${sshKeyPath} -r ./dist/* ${remoteUser}@${remoteHost}:${remotePath}`

console.log(logSymbols.info, '正在上传构建产物...')
exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(logSymbols.error, `上传失败:\n${stderr}`)
    process.exit(1)
  } else {
    console.log(logSymbols.success, '上传成功:\n' + stdout)
  }
})
