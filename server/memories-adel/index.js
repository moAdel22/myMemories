import express from 'express'
import dotenv from 'dotenv'
// import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/Posts.js'

const app=express()
dotenv.config();
app.use(cors());


app.use(express.json({limit:"50mb", extended:true}))
app.use(express.urlencoded({limit:"50mb", extended:true}))


app.use('/posts',postRoutes)

app.get('/',(req,res)=>{
    res.send('hello to memories API')
})



// const CONNECTION_URL='mongodb+srv://adolninja:test1234@nodetuts.u3fgr.mongodb.net/memoriesProject?retryWrites=true&w=majority'
const PORT= process.env.PORT;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then (()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
    .catch((err)=>console.log(err.message))

mongoose.set ('useFindAndModify',false); //not getting warnings in the console