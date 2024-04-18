const express = require("express");
const app = express(); // PATRÓN BUILDER EN TODA REGLA
const router = express.Router();
const PORT = 3000;

/////////////
const moviesRouter = require('./routes/moviesRouter');
    // Usar el enrutador de películas
    app.use('/movies', moviesRouter);
    //app.use('/users', usersRouter);
    // Iniciar el servidor
////////


app.use(express.json());

app.listen(PORT, ()=>{
    console.log("Servidor funcionandoooo!!!!");
    console.log(`El servidor está escuchando en http://localhost:${PORT}`);
});

/////////// QUERY PARAMSSS!!!!!!!
// http://localhost:3000/usuarios?email=a@s.com&pass=123
app.post("/usuarios", (req,res)=>{
    const email = req.query.email;
    const pass = req.query.pass;
    // SELECT * FROM USUARIO WHERE EMAIL=' + email + 'AND pass = ' + pass + '';
    res.send('Tu primer GET');
    // LEER UNA PELÍCULA (SELECT * FROM PELICULAS)
});
/////////// PATH PARAMSSS!!!!!!!
app.get("/usuarios/:nombre", (req,res)=>{
    const nombre = req.params.nombre;
    res.send('Params por GET');
});
/////////// BODY PARAMSSS!!!!!!!
/* http://localhost:3000/usuarios
    {
    "email" : "a@svalero.com",
    "password": "1234",
    "name": "albert"
    }
*/
app.post("/usuarios/", (req,res)=>{
    const {email, password, name} = req.body;
    res.send('Body paramss por POST');
});
/*app.post("/usuarios/insert", (req,res)=>{
    const {email, password, name} = req.body;
    res.send('Body paramss por POST');
});*/
app.get("/peliculas", (req,res)=>{
    res.send('Tu primer GET');
    // LEER UNA PELÍCULA (SELECT * FROM PELICULAS)
});
app.post("/peliculas", (req,res)=>{
    res.send('Tu primer POST');
    // INSERTAR UNA PELÍCULA (INSERT INTO PELICULA ... VALUES ...)
});
app.put("/peliculas", (req,res)=>{
    res.send('Tu primer PUT');
    // MODIFICAR UNA PELÍCULA (UPDATE PELICULA SET .... WHERE)
});
app.delete("/peliculas", (req,res)=>{
    res.send('Tu primer DELETE');
    // ELIMINAR UNA PELÍCULA (DELETE PELICULA)
});


