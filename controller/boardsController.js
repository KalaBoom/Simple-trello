const models = require('../models')

const controllerBoardDB = () => {
    const Board = models.board
    const Column = models.column
    const Card = models.card

    return {
        addBoard(title, res, rej) {
            const href = '/' + title.replace(/ /ig,'_')
            const newBoard = new Board({
                title, href,
                columns: []
            })
            newBoard.save()
                .then(res)
                .catch(rej)
        },
        async addColumn(idBoard, titleColumn) {
            await Board.findOne({_id: idBoard})
                .then(board => {
                    const column = new Column({
                        title: titleColumn,
                        cards: []
                    })
                    column.save()
                    board.columns.push(column)
                    board.save()
                    console.log(`Columns ${board.columns} ${board.columns.length}`)
                })
                .catch(e => {
                    throw new Error(e.message)
                })
        },
        async addCard(idColumn, titleCard) {
            Column.findOne({_id: idColumn})
                .then(column => {
                    const card = new Card({title: titleCard})
                    card.save()
                    column.cards.push(card)
                    column.save()
                    console.log(`Card ${column.title} ${column.cards}`)
                })
                .catch(e => {
                    throw new Error(e.message)
                })
        },
        async findBoards() {
            return await Board.find()
        },
        async findOneBoard(idBoard) {
            let foundedColumns

            await this.findColumns(idBoard)
                .then(cols => foundedColumns = cols)
                .catch(e => console.error(e.message))

            const columnsArray = async(columns, asyncFn) => {
                const mergeArray = columns.map(asyncFn)
                const resultArray = await Promise.all(mergeArray)
                return resultArray
            }

            const mergeArray = await columnsArray(foundedColumns, async col => {
                let resultCol
                await this.findCards(col.id)
                    .then(cards => {
                        col.cards = cards
                        resultCol = col
                    })
                return resultCol
            })
            
            return mergeArray
        },
        async findColumns(idBoard) {
            let foundedColumns
            await Board.findOne({_id:idBoard})
                .populate('columns')
                .exec()
                .then(board => foundedColumns = board.columns.map(col => {
                    return {id: col.id, title: col.title, cards: col.cards}
                }))
            return foundedColumns
        },
        async findCards(idColumn) {
            let foundedCards
            await Column.findOne({_id: idColumn})
                .populate('cards')
                .exec()
                .then(col => foundedCards = col.cards.map(card => {
                    return {id: card.id, title: card.title, complite: card.complite}
                }))
            return foundedCards
        }
    }
}

module.exports = controllerBoardDB