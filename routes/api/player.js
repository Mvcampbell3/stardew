const router = require('express').Router();
const npcs = require('../../seed');

router.get('/', (req, res) => {
  res.json({ npcs })
})

router.post('/new', (req, res) => {
  res.json({ create: true })
})

module.exports = router;