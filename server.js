const express = require("express")
const app = express();

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine', 'ejs')

/*
app.get('/', (req, res) => {
    res.json({"numberOfHits":2,"hits":[{"score":0.0003451437393358565,"id":"evpo-ff10bc5a-4aad-4895-b886-fb88e598ed57","schema":"Person","name":"Knut Arild Hareide","aliases":"Hareide, Knut Arild","birth_date":"1972-11-23","countries":"no","identifiers":"Q1350399","sanctions":"","phones":"","emails":"","dataset":"Every Politician","last_seen":"2021-07-26 11:55:45","first_seen":"2021-10-07 03:02:59"},{"score":0.01857804455091699,"id":"us-cia-norway-knut-arild-hareide-min-of-transportation-communications","schema":"Person","name":"Knut Arild HAREIDE","aliases":"","birth_date":"","countries":"no","identifiers":"","sanctions":"","phones":"","emails":"","dataset":"CIA World Leaders","last_seen":"2021-07-26 11:55:45","first_seen":"2021-10-07 03:02:59"}]});
})
*/
app.get('/', (req,res) => {
    res.render("persons/new")
})


const userRouter = require('./js/persons')

app.use('/persons', userRouter)

app.listen(3000)