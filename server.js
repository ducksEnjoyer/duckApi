const express = require("express");
const apiRouter = require("./router/api")
const app = express()

const PORT = process.env.PORT || 8000

app.get("/",(request,response)=>{
    response.sendFile(__dirname + "/index.html")
})
app.use("/api",apiRouter) 
app.listen(PORT,()=>{  
     
    console.log(`Server started on http://localhost:${PORT}`)
})