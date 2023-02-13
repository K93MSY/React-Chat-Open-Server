require('dotenv').config();
require('express')()
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        res.header(
          'Access-Control-Allow-Headers',
          'Content-Type, Authorization, access_token'
        )
      
        // intercept OPTIONS method
        if ('OPTIONS' === req.method) {
          res.send(200)
        } else {
          next()
        }}
    )
    .get('/', (req, res) => {
        res.status(200);
        res.send({
            message: "Hello World"
        })
    }).get('/users', (req, res) => {
        res.send({
            ActiveUsers: 0,
        });
    }).listen(process.env.PORT, () => {
        console.log('Serving at' + process.env.PORT)
    })