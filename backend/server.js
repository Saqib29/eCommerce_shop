import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRouter.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const app = express()

// sensitive data hide configuration
dotenv.config()
// database connection
connectDB()

// this one allows to accept the json in the body
app.use(express.json())

// Routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// Custom error handling middleware for
app.use(notFound)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('API is running...')
})


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.PORT} mode on port ${PORT}`.yellow.bold))