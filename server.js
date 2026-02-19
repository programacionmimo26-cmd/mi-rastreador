const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/guardar-ubicacion", (req, res) => {
  const { latitud, longitud } = req.body;

  const data = `Lat: ${latitud}, Lng: ${longitud}\n`;

  fs.appendFile("ubicaciones.txt", data, (err) => {
    if (err) return res.status(500).send("Error");
    res.send("Ubicación guardada");
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor activo");
});
