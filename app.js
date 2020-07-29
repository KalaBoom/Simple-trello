const router = require('./routes/create')

const 
    express  = require('express'),
    config   = require('config'),
    fs       = require('fs'),
    mongoose = require('mongoose'),
    routes   = require('./routes'),
    PORT     = config.get('port') || 5000,
    app      = express()


app.use(express.json({extended:true}))

app.use((req,res,next) => {
    const data = `${req.method} ${req.url}`
    fs.appendFile('server.log', data + '\n', () => {})
    next()
})

app.use('/', routes.mainBoard)
app.use('/create', routes.create)
app.use('/delete', routes.del)

async function start() {
    try {
        await mongoose.connect(config.get('mongoDB'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, ()=> {
            console.log(`Server listen on ${PORT}`)
        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
