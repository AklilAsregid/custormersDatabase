const express = require('express')
const router = express.Router
const Guard = require('./verifytoken')

router.get('/',Guard,(req, res)=>{
    res.send("Wellcome here")
})

module.exports = router;