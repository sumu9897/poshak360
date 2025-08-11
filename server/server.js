import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';
import orderRouter from './routes/orderRoute.js'



// App Config
const app = express()
const port = process.env.PORT || 4001
connectDB();
connectCloudinary()

// midddlewares
app.use(express.json())
app.use(cors())

app.use(ClerkExpressWithAuth({
    apiKey: process.env.CLERK_SECRET_KEY
  }));


// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req, res)=> {
    res.send("API Working")
})

app.listen(port, () => console.log('Server started on PORT: '+ port)
)