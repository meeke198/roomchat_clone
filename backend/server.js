import express from "express"
import mongoose from "mongoose"
import cors from "cors" //It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
//app config
const app = exxpress()
const port = process.env.PORT || 8000

//api rputes
app.get('/', (req, res) => res.status(200).send('hello word'))

//listen

app.listen(port, () => console.log(`Listening to port ${port}`))