const db = require('../db')
const Restaurant = require('../models/restaurant')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const restaurants = [
        {
            id_number: '01',
            name: 'Jurassic Cafe',
            description: 'Whether you have the appetite of a T. rex or just want to nibble, Jurassic Café is the perfect spot for a tasty bite. Choose from a selection of Costa Rican inspired cuisine.',
            image: 'https://magicguidebooks.com/wp-content/uploads/2020/01/jurassic-cafe-universal-studios-hollywood.jpeg',
            serves_dino: false
        },

        {
            id_number: '02',
            name: 'Thunder Falls',
            description: "Ravenous hunger doesn't stand a chance. Here, there is a feast awaiting every adventurer. Choose from a mouthwatering array of rotisserie chicken, BBQ ribs, smoked turkey legs, rice bowls, salads, and more. Relax in the cool indoor dining room or watch daring riders get drenched on Jurassic Park River Adventure right outside!",
            image: 'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-thunder-falls-terrace-restaurant-front-a.jpg',
            serves_dino: true
        },

        {
            id_number: '03',
            name: 'T-Rex Cafe and Restaurant',
            description: 'Surround yourself with the sights and sounds of a prehistoric world when you explore this dinosaur-themed café teeming with hands-on discovery zones and creative cuisine.',
            image: 'https://www.mydinosaurs.com/wp-content/uploads/2018/01/The-T-Rex-Cafe-and-Restaurant-at-Disney-Springs2.jpg',
            serves_dino: true
        }
    ]
    await Restaurant.insertMany(restaurants)
    console.log('Created restaurants')
}

const run = async () => {
    await main()
    db.close()
}

run()