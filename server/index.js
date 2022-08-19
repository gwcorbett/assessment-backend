const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getExtra } = require('./controller')
const { getIt } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/getextra", getExtra)
app.get("/api/getIt", getIt)

app.post('/api/name', (req, res) => {
    console.log(req.body)

    let name = req.body.name

    res.status(200).send(`Welcome, ${name}! It is nice to meet you.`)

})


app.listen(4000, () => console.log("Server running on 4000"));
