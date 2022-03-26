const db = require('../db')
const Dino = require('../models/dino')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    await Dino.deleteMany({})
    console.log('Dinos extinct!')
    db.close()
}

main()