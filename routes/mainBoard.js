const
    express     = require('express'),
    board       = require('../models/Board'),
    controller  = require('../controller/boardsController')(),
    router      = express.Router()

router.get('/', (req, res) => {
    try {
        res.send('<h1>Hello</h1>')
    } catch(e) {
        res.status(500).json('Something happend wrong')
    }
})

router.get('/:title', async (req, res) => {
    try {
        const title = req.params.title
        console.log('hey', req.url, title)
        let response
        if(title === 'all') response = await controller.findBoards()
        else response = await controller.findOneBoard(title)
        res.status(200).json(response)
    } catch(e) {
        res.status(500).json('Something happend wrong')
    }
})

module.exports = router