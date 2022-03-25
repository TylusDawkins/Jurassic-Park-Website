const mongoose = require('mongoose')
const DinoSchema = require('./dino')
const RideSchema = require('./ride')
const UserSchema = require('./user')
const RestaurantSchema = require('./restaurant')
const TicketSchema = require('./ticket')

const Dino = mongoose.model('Dino', DinoSchema)
const Ride = mongoose.model('Ride', RideSchema)
const User = mongoose.model('User', UserSchema)
const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
const Ticket = mongoose.model('Ticket', TicketSchema)

module.exports = {
    Dino,
    Ride, 
    User,
    Restaurant, 
    Ticket
}