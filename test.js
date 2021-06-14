const fs = require('fs')
const languageEncoding = require('detect-file-encoding-and-language')

let directory = 'E:/迅雷下载/[Snow-Raws] 大図書館の羊飼い'

let fileArr = fs.readdirSync(directory)
let assFileArr = fileArr.filter((v) => {
    return v.substring(v.lastIndexOf('.') + 1) == 'ass' && !v.startsWith('[utf8cov]')
})

assFileArr.map((path) => {
    languageEncoding(`${directory}/${path}`).then((fileInfo) => {
        let { encoding } = fileInfo
        fs.writeFileSync(
            `${directory}/[utf8cov]${path}`,
            fs.readFileSync(`${directory}/${path}`, {
                encoding,
            })
        )
    })
})
