const express = requier('express')
const mongoose = requier('mongoose')
const cors = requier('cors')

const app = express()
app.use(express.urlencoded({extends:false}))

app.use(express.static('public'))

//routes
app.use('/api/index',require('./routes/api/index.js'))


app.listen(5000,()=> console.log("server is runnning on port 50000"))
