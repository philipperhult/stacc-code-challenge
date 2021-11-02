const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.set('view engine', 'ejs')

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.get('/', (req,res) => {
    res.render("api/new")
})

const userRouter = require('./js/api')

app.use('/api', userRouter)

app.listen(3000)