const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    
    villains: [
        {
            id: 1,
            name: "chainSmokingBooster",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Dementor",
            power: "Fire blasts"
        },
    ]
}









export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}