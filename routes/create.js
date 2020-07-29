const
    express    = require('express'),
    controller = require('../controller/boardsController')(),
    router     = express.Router()

router.post('/board/:board',(req,res) => {
    try {
        console.log('board here', req.url, req.params.board)
        const board = req.params.board
        const then = () => res.status(200).send(true)
        const err = () => res.status(400).send(false)
        controller.addBoard(board, then, err)
    } catch(e) {
        res.status(500).json('Something happend wrong')
    }
})

router.post('/column/:board/:column', (req, res) => {
    try {
        const board = req.params.board
        const column = req.params.column
        controller.addColumn(board, column).then(() => res.send(true))
    } catch(e) {
        res.status(500).json('Something happend wrong')
    }
})

router.post('/card/:column/:card', (req, res) => {
    try {
        const column = req.params.column
        const card = req.params.card
        controller.addCard(column, card)
    }
    catch(e) {
        res.status(500).json('Something happend wrong')
    }
})

module.exports = router