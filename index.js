require("dotenv").config();
const express =require("express")
const cors = require("cors");
const connectDB = require("./src/config/db");



const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

const scoresRoute = require("./src/routes/score.route")
const randomWordRoute = require("./src/routes/randomWord.route");

app.use("/scores",scoresRoute)
app.use("/random-word",randomWordRoute)
app.get("/",(req,res)=>{
    res.status(200).send({message:"Hello User"})
})


app.listen(PORT,async()=>{
    await connectDB();
    console.log(`Listening to http://localhost:${PORT}`)
})