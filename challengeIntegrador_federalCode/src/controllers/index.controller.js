const connection = require('../dbConnection/connection')
const conn = connection()

controller.index = (req, res, next) => {
   conn.query('SELECT *FROM users', (err, rows) =>{
      if (err) next(new Error(err))
      else res.render('index', {baseDeDatos: rows})
   })
}


 module.exports = controller


 