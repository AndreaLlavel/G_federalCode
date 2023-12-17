const connection = require('../../dbConnection/connection')
const conn = connection()

const controller = {}

controller.index = (req, res, next) => {
   conn.query('SELECT *FROM users', (err, rows) => {
      if (err) next(new Error(err))
      else res.render('index', { allUsers : rows})
   })
}
module.exports = controller


 