import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'


// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB();

// midddlewares
app.use(express.json())
app.use(cors())


// api endpoints

app.get('/', (req, res)=> {
    res.send("API Working")
})

app.listen(port, () => console.log('Server started on PORT: '+ port)
)