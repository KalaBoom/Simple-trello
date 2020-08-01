const
    express    = require('express'),
    controller = require('../controller/boardsController')(),
    router     = express.Router()

router.post('/board/:id',(req,res) => {
    try {
        const idBoard = req.params.id
        console.log(`Board ${idBoard}`)
        controller.deleteBoard(idBoard).then(() => res.send(true))
    } catch(e) {
        res.status(500).json('Something happend wrong')
    }
})

router.post('/column/:id',(req,res) => {
    try {
        const column = req.params.id
        console.log(`column ${column}`)
        controller.deleteColumn(column).then(() => res.send(true))
    } catch(e) {
        res.status(500).json('Something happend wrong')
    }
})

router.post('/card/:id',(req,res) => {
    try {
        const idCard = req.params.id
        console.log(`card ${idCard}`)
        controller.deleteCard(idCard).then(() => res.send(true))
    } catch(e) {
        res.status(500).json('Something happend wrong')
    }
})

module.exports = router