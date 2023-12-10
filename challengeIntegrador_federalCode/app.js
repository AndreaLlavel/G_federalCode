//archivo que tiene la logica del server. Rosa Mariño
const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const path = require('path');

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use("/",mainRoutes);
app.use("/shop",shopRoutes);
app.use("/admin",adminRoutes);
app.use("/auth",authRoutes);

app.listen(4000,()=> console.log("Servidor corriendo en http://localhost:4000"));

