const express = require('express')
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

module.exports = app