const Router = require('express');
const router = new Router();

router.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).send("Ok");
});

module.exports = router;
