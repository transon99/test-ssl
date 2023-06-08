const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true, limit: '3mb' }))

app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`))

app.post("/registration", (req, res) => {
    console.log(req.body)
    res.redirect("/")
})

const options = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'localhost-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.pem'))
}

const PORT = process.env.PORT || 3000
https.createServer(options, app).listen(PORT, console.log(`server runs on port ${PORT}`))
