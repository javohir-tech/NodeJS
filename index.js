const carData = require('./car')
const userData = require('./user')

console.log(carData.car)
carData.carLogger()
console.log(userData.user)
userData.userLogger()

console.log(__dirname)
console.log(__filename)

// const data = require()