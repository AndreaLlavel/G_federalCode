const connection = require('../../dbConnection/connection')
const conn = connection()

const controller = {}

controller.index = (req, res, next) => {
   conn.query('SELECT *FROM users', (err, rows) => {
      if (err) next(new Error(err))
      else res.render('index', { allUsers : rows})
   })
}
//addUSER
controller.addUser = (req, res, next) => {
   conn.query('INSERT INTO users SET ?', [req.body], (err, rows) =>{
      if(err) next(new Error(err))
      res.redirect('/')
   })
}
//updateUser
controller.updateUser = (req, res, next) => {
   //Poner el where para que se actualicen los datos
   conn.query('UPDATE users SET ? WHERE id=?', [req.body, req.params.userId], (err, rows) =>{
      if(err) next(new Error(err))
      res.redirect('/')
   })
}

//Delete User
controller.deleteUser = (req, res, next) => {
   conn.query('DELETE FROM users WHERE id= ?', [ req.params.userId], 
   (err, rows) => {
     if(err) next(new Error(err))
   res.send({ok: true})
   })
}

module.exports = controller


 


 