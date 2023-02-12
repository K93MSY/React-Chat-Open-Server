require('dotenv').config();
require('express')()
.get('/',(req,res) => {
    res.status(200);
    res.json({
        message:"Hello World"
    })
}).get('/users',(req,res) => {
    res.json({
        ActiveUsers:0,
    });
}).listen(process.env.PORT,()=>{
    console.log('Serving at'+process.env.PORT)
})