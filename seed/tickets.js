const db = require('../db')
const Ticket = require('../models/ticket')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const tickets = [
        {
            Type: 'Senior (ages 60+)',
            Price: '$35',
        },

        {
            Type: 'Adult (ages 13+)',
            Price: '$45',
        },

        {
            Type: 'Children (ages 2-12)',
            Price: '$25',
        }
    ]

    await Ticket.insertMany(tickets)
    console.log('Created tickets')

}

const run = async () => {
await main()
db.close()

}

run()