/* eslint-disable no-underscore-dangle */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

module.exports = router;
