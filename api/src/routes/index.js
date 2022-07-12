const { Router } = require("express");
const characterRouter = require('./characterRouter.js');
const episodiesRouter = require("./episodiesRouter.js");

const router = Router();

// Configurar los routers
router.use('/character', characterRouter);
router.use('/episodie', episodiesRouter);

module.exports = router;
