const Router = require('express');
const router = new Router();
const cards = require('../constants/constCards');

router.get('/cards', (req, res) => {
    res.status(200).json(cards);
});

module.exports = router;
