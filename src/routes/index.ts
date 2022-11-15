import express from 'express';
import imageRouter from './image.route';

const router = express.Router();

/* GET APP Details. */
router.get('/', function (req, res, next) {
  const response = {
    app_name: 'IMAGE Grid',
  };

  res.status(200).send(response);
});

router.get('/status', (req, res) => {
  res.send({ status: 'OK' });
}); // api status
router.get('/health', (req, res) => {
  res.send({ status: 'OK' });
}); // api status

router.use('/image', imageRouter); // image routes.

export default router;
