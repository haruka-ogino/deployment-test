import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';

// import emojis from './emojis'
import leaderboard from './leaderboard';

const router = express.Router();

router.use(express.json());
// console.log('helpppp');

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

// router.use('/emojis', emojis);
router.use('/leaderboard', leaderboard);

export default router;
