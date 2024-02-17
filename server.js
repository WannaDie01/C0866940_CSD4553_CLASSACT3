var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "Localhost"

app.use(express.json)
app.use(express.urlencoded({extended: true})

app.get('/', function(req, res){
    res.send("<h1>Home Page</h1>")
})

app.get('/name', function(req, res){
    res.send("<h1>C0866940 - Harsh Kumar Gupta</h1>")
})

app.post('/profile', (req, res) =>{
    console.log(req.body)
    res.json(req.body)
})

app.get('admin', (req, res) => {
    res.send('Admin Homepage')
})

app.get("/user/:id", (req, res)=> {
    res.send('User Id: ${req.parans.id}');
})

app.get("/valueofday/:year{\\d{4})=:day(\\d{2})", (req, res)=>{
    console.log(req.params)
    res.send(req.params)
});

app.listen(process.env.PORT || SERVER_PORT, ()=> {
    console.log('Server running at http://${SERVER_HOST}:${SERVER_PORT}/');
})