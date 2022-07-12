const { Router } = require("express");

const episodiesRouter = Router();

// Configurar los routers
episodiesRouter.get("/", (req, res) =>{
    res.status(200).send("ok")
})

module.exports = episodiesRouter;