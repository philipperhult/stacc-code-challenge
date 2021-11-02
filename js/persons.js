const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send("Person list")
})

var file = require("../pep_small.json")
router.get('/result', (req, res) => {
    res.json({"numberOfHits": 1, "hits":file})
    //res.json({"numberOfHits":2,"hits":[{"score":0.0003451437393358565,"id":"evpo-ff10bc5a-4aad-4895-b886-fb88e598ed57","schema":"Person","name":"Knut Arild Hareide","aliases":"Hareide, Knut Arild","birth_date":"1972-11-23","countries":"no","identifiers":"Q1350399","sanctions":"","phones":"","emails":"","dataset":"Every Politician","last_seen":"2021-07-26 11:55:45","first_seen":"2021-10-07 03:02:59"},{"score":0.01857804455091699,"id":"us-cia-norway-knut-arild-hareide-min-of-transportation-communications","schema":"Person","name":"Knut Arild HAREIDE","aliases":"","birth_date":"","countries":"no","identifiers":"","sanctions":"","phones":"","emails":"","dataset":"CIA World Leaders","last_seen":"2021-07-26 11:55:45","first_seen":"2021-10-07 03:02:59"}]});
})

router.get('/new', (req,res) => {
    res.render("persons/new")
})

router.post('/', (req, res) => {
    const valid = false
    if (valid) {
        persons.push({firstName: req.body.search})
        res.redirect(`/persons/${persons.length - 1}`)
    } else {
        console.log("Error")
        res.render("persons/new", {firstName: req.body.search})
    }
})

router
    .route("/:name")
    .get((req,res) => {
        console.log(req.persons)
        res.send(`${req.params.name}`)
    })

const persons = [{"score":0.0003451437393358565,"id":"evpo-ff10bc5a-4aad-4895-b886-fb88e598ed57","schema":"Person","name":"Knut Arild Hareide","aliases":"Hareide, Knut Arild","birth_date":"1972-11-23","countries":"no","identifiers":"Q1350399","sanctions":"","phones":"","emails":"","dataset":"Every Politician","last_seen":"2021-07-26 11:55:45","first_seen":"2021-10-07 03:02:59"},{"score":0.01857804455091699,"id":"us-cia-norway-knut-arild-hareide-min-of-transportation-communications","schema":"Person","name":"Knut Arild HAREIDE","aliases":"","birth_date":"","countries":"no","identifiers":"","sanctions":"","phones":"","emails":"","dataset":"CIA World Leaders","last_seen":"2021-07-26 11:55:45","first_seen":"2021-10-07 03:02:59"}]
router.param("name", (req,res,next,name) => {
    req.person = persons[name]
})

function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router