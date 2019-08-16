module.exports = (err, req, res, next) => {
  console.error(err.message)
  res.status(500).send(`Something broke! ${err.message}`)
  next()
}