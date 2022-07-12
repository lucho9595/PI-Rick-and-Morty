const { Router } = require("express");

const characterRouter = Router();

// Configurar los routers
characterRouter.get("/", (req, res) =>{
    res.send("ok");
});

module.exports = characterRouter;