require('express-async-errors');
const config = require('config');


module.exports = function() {
  
  process
    .on('uncaughtException', (err) => {
      console.log(`--- uncaughtException: `, err.stack)
      process.exit(1)
    })
    .on('unhandledRejection', (err) => {
      console.log(`--- uncaughtException: ${err.message}`)
      process.exit(1)
    })


  if (!config.get('jwtSecretKey')) {
    console.error(`FATAL ERROR: SECRET_KEY is not exists!`)
    process.exit(1)
  }
}