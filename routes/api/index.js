const router = require('express').Router();
const player_routes = require('./player');

router.use('/player', player_routes);

module.exports = router;