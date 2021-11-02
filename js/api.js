const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send("Person list")
})

var file = require("../pep_small.json")

router.get('/result', (req,res) => {
    var searchResult = req.query.search
    var results = []
    let count = 0
    for(var result of file) {
        if(result.name == searchResult) {
            count++
            results.push(result)
        }
    }
    res.json({"numberOfHits": count, "hits":results})
})

function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router