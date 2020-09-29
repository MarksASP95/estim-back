const router = require('express').Router();

const Worker = require('../models/Worker');

router.get('/', async (req, res) => {
    const workers = await Worker.find({});
    res.send(workers);
});

module.exports = router;