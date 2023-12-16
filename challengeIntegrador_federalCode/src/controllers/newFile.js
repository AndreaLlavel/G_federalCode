const { controller, conn } = require('./index.controller');

controller.index = (req, res, next) => {

   // Lo guardamos en rows, que seria filas
   conn.query('SELECT * FROM users', (err, rows) => {
      if (err) next(new Error(err));
      else res.render('index', { baseDeDatos: rows });
   });
};
