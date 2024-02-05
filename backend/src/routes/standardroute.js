const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('Front-End-Assignment');
  res.status(200);
});

module.exports = router;
