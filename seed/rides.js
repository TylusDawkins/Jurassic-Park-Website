const db = require('../db')
const Ride = require('../models/ride')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const rides = 
    [ 
        {
            id_number: '5721078813',
            name: 'The Mosasaurus Feeding Show',
            description: "The Mosasaurus Feeding Show occurs every two hours and gives visitors the chance to experience the dinosaur's eating habits. The show involves the Mosasaurus - one of Jurassic Park's most powerful dinosaurs - leaping from the water to claim its prize - a great white shark. Audiences are advised to wear ponchos as the Mosasaurus's dive back into the water can cause viewers to get splashed. As the dinosaur disappears into its lagoon enclosure, the seats lower into the underwater observatory, where spectators can observe the creature in its natural habitat. It's a grand spectacle for tourists and provides an unmissable piece of entertainment.",
            url: 'www.jurassic-world-theme-park.com/MosasaurusFeedingShow',
            min_height: false
        }, 
    
        {
            id_number: '8713902754',
            name: 'The Gyrospheres',
            description: "One of the most popular attractions at Jurassic World, the Gyrospheres allow the public to experience the dinosaurs close-up. The spherical vehicles can be operated manually by the park visitors, and contain a built-in monitor, which informs its riders about the prehistoric species they may encounter. Gyrosphere users can encounter over 30 different prehistoric species during their journey, including the Ankylosaurus, Triceratops, and Stegosaurus. The ride vehicles also come equipped with some safety features, such as the ability to roll to a safe distance should the Gyrosphere venture too close to a dinosaur, and protective glass so strong that it can withstand a Dilophosaurus's venomous spit.",
            url: 'www.jurassic-world-theme-park.com/Gyrospheres',
            min_height: false
        }, 
    
        {
            id_number: '1264820471',
            name: 'Jurassic World Aviary',
            description: "The prospect of wandering into an enclosure full of winged dinosaurs may seem a scary thought for many individuals, but Jurassic World's aviary finds a way to make it safe. The park's attraction allows visitors to observe the Pterosaur species in a gigantic dome, whilst the creatures fly overhead. The aviary invites the visitors to watch the Pterosaurs from the safety of six viewing platforms, where they are unable to reach the tourists below.",
            url: 'www.jurassic-world-theme-park.com/JurassicWorldAviary',
            min_height: false
        }, 
    
        {
            id_number: '8402502177',
            name: 'Camp Cretaceous',
            description: "The summer camp offers the entertainment venue's younger audience the chance to learn about the park and its dinosaurs. The camping ground features cabins as the childrens' living quarters, and an elevator carved into a tree trunk.Campers can engage in a variety of activities, including a zip line and an obstacle course. Camp Cretaceous's kayaks allow children to paddle through an underground cave, where they can encounter a species known as the Parasaurolophus Lux. Rock climbing facilities are also available to guests at the summer camp, where kids can keep themselves entertained for a few hours.",
            url: 'www.jurassic-world-theme-park.com/CampCretaceous',
            min_height: false 
        }, 
    
        {
            id_number: '3679800145',
            name: 'Jurassic World Monorail',
            description: "Wandering around a theme park can sometimes prove tiring, which is why transportation can be useful. Thankfully, Jurassic Park possesses its own form of transport, in its extensive monorail system. The Jurassic World Monorail comprises twelve stations dotted throughout the park, with a vehicle available for boarding every twenty minutes. The monorail brings visitors who have arrived via ferry into the park, where they are transported to Main Street. Guests can also use the transportation system to visit the Aviary, Innovation Center, and Gentle Giants Petting Zoo, providing transport links to some of the theme park's main areas of interest.",
            url: 'www.jurassic-world-theme-park.com/JurassicWorldMonorail',
            min_height: false
        }, 
    
        {
            id_number: '4712903913',
            name: 'VelociCoaster',
            description: "VelociCoaster features two high-speed launches powered by linear synchronous motors, a signature 155-foot-tall (47 m) top hat, four inversions, and a maximum speed of 70 mph (110 km/h).", 
            url: 'www.jurassic-world-theme-park.com/VelociCoaster',
            min_height: true 
        } 
    ]
        await Ride.insertMany(rides)
        console.log('Created rides!')
}

const run = async () => {
    await main()
    db.close()
}

run()