const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
app.get("/ubicacion", (req, res) => {
    // Para probar, vamos a mandar coordenadas de ejemplo
    const ubicacion = {
        latitud: -34.6037,
        longitud: -58.3816
    };
    res.json(ubicacion);
});
