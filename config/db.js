const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('rest', 'root', 'root', {
    host:'localhost',
    port: '8889',
    dialect:'mysql'
})

sequelize.authenticate()
.then(() => {
    console.log('DB Connected!')
})
.catch((err => {
    console.log('Error : Could not connect to DB! : ' + err)
}))



module.exports = sequelize
