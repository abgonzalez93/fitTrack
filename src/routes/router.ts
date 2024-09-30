import express from "express";

const router = express.Router()

// router.use('/api', authentication, apiRoutes)

router.get('/', function (req, res) {
  console.log(req)
  res.send('Hello World!');
});

router.post('/', function (req, res) {
  console.log(req)
  res.send('Got a POST request');
});

router.put('/user', function (req, res) {
  console.log(req)
  res.send('Got a PUT request at /user');
});

router.delete('/user', function (req, res) {
  console.log(req)
  res.send('Got a DELETE request at /user');
});

export default router