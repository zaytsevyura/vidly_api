require('express-async-errors');
require('dotenv').config();

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


  if (!process.env.SECRET_KEY) {
    console.error(`FATAL ERROR: SECRET_KEY is not exists!`)
    process.exit(1)
  }
}