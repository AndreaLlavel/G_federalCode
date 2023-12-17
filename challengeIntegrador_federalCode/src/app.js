//archivo que tiene la logica del server. Rosa Mariño
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const { error } = require('console');
//Setting, configuracion del servidor
//app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

//app.use(express.static('public'));
app.use("/",mainRoutes);
app.use("/shop",shopRoutes);
app.use("/admin",adminRoutes);
app.use("/auth",authRoutes);

app.listen(4000,()=> console.log("Servidor corriendo en http://localhost:4000"));

//Middlwares
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//Routers
app.use(require('./routes/index.routes'));

//Control de Errores
app.use((err, req, res, next)=>{
    res.send({error: err.message});
}); //El next seria el callback que se ejecuta 
     //despues de la ejecucion principal

//Public
app.use(express.static(path.join(__dirname, '../public')));

app.listen(app.get("port"), ()=>{
    console.log(`Server on port ${app.get("port")}`);
});
