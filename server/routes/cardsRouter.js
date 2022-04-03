const Router = require('express');
const router = new Router();
const Cards = require('../models/models');
const authMiddleware = require("../middleware/authMiddleware");

router.get('/cards', authMiddleware, async (req, res) => {
    const cards = await Cards.Card.findAll();
    setTimeout(() => res.status(200).json(cards), 2000);
});

module.exports = router;