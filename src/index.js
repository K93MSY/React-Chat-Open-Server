require('dotenv').config();
require('express')()
.use(require('express').json)
.get('/',(req,res) => {
    res.status(200);
    res.send({
        message:"Hello World"
    })
}).get('/users',(req,res) => {
    res.send({
        ActiveUsers:0,
    });
}).listen(process.env.PORT,()=>{
    console.log('Serving at'+process.env.PORT)
})