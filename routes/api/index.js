const router = require('express').Router()

router.get('/',(req, res)=>{
    res.send("Wellcome here")
})

module.exports = router;