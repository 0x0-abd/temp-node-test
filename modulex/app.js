const names = require('./module')
const sayHi = require('./utils')
const data = require('./alt')

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)