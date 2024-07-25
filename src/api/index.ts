import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';

import leaderboard from './leaderboard';

const router = express.Router();

router.use(express.json());

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

// router.use('/emojis', emojis);
router.use('/leaderboard', leaderboard);

export default router;
