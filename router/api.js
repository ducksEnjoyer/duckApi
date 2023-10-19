const express = require("express")
const {
    allDucks,
    highestDuck,
    randomDuck,
    ducksBetween 
} = require("../controller/apiController")
const router = express.Router()

router.get("/all", allDucks)
router.get("/highest", highestDuck)
router.get("/random", randomDuck) 
router.get("/", ducksBetween)  
module.exports = router