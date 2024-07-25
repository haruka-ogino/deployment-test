import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
// import test from './test';

const router = express.Router();

// router.use(express.json());

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
// router.use('/test', test)

export default router;
