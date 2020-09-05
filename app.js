const 
    express  = require('express'),
    config   = require('config'),
    fs       = require('fs'),
    path     = require('path'),
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

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
   
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

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
