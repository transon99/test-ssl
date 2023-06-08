const express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true, limit: '3mb' }))

app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`))

app.post("/registration", (req, res) => {
    console.log(req.body)
    res.redirect("/")
})

const PORT = process.env.PORT || 8080
const listener = app.listen(PORT, () => {
    console.log(`server run in the port ${listener.address().port}`);
})