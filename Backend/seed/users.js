const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const users = [ 
        {name: '',
        email: '',
        age: '', 
    }
    ]

    await User.insertMany(users)
    console.log('Posted one user')

}

const run = async () => {
await main()
db.close()

}

run()