var router = require('express').Router();

router.get('/', (req, res) => {
  res.render('./login.ejs');
});

module.exports = router;