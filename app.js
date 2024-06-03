/** Ya instalados los modulos, cargamos los modulos que se necesitan */
const express = require('express')

/** Se instancia la constanta que va a lanzar la aplicacion */
const app = express();

/** Importamos el JSON para poder utilizarlo */
const data = require("./travels.json")

/** Variable para el puerto */
const PORT = 4000;

/** Generar ruta */
app.get('/', (req, res) => {
	res.send("hola mundo");
});

/** Iniciamos un servidor en el puerto */
app.listen(PORT, () =>{
    console.log(`servidor en http://localhost:${PORT}`);
})
