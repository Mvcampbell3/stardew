const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ player: true })
})

router.post('/new', (req, res) => {
  res.json({ create: true })
})

module.exports = router;