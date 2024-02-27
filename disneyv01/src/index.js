const express = require("express");
const app = express();
const PORT = 3000;


app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/peliculas", (req, res)=>{
    res.send("Bienvenido a mi API DISNEY");
});
