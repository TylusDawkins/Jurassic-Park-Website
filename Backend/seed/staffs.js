const db = require('../db')
const Staff = require('../models/staff')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const staffs = [
        {
            id_number: '001',
            title: 'Park Area Ambassador',
            name: 'Grant',
            image: 'https://www.hollywoodreporter.com/wp-content/uploads/2021/08/MSDJUPA_EC010.jpg'
        },

        {
            id_number: '002',
            title: 'Entertainment Technician',
            name: 'Ellie',
            image: 'https://static.wikia.nocookie.net/pure-good-wiki/images/7/7e/4785641918_d408b00faa.jpg/revision/latest?cb=20210130172617'
        },

        {
            id_number: '003',
            title: 'Admissions Leader',
            name: 'Malcolm',
            image: 'https://upload.wikimedia.org/wikipedia/en/6/60/Ian_Malcolm_%28Jeff_Goldblum%29.jpg'
        },
        {
            id_number: '004',
            title: 'Ride Technician',
            name: 'Arnold',
            image: 'https://static.wikia.nocookie.net/jurassicpark/images/0/0c/Ray_Arnold_%28JP%29_Profile.png/revision/latest?cb=20210622173309'
        },
    ]

    await Staff.insertMany(staffs)
    console.log('Created staff')

}

const run = async () => {
await main()
db.close()

}

run()