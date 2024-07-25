import express from 'express';

import emojis from './emojis';
// import { getAllScores } from '../db/leaderboard-fns'
// import test from './test';

const router = express.Router();

// router.use(express.json());

router.get('/', (req, res) => {
  const result = [1, 2, 3, 4];
  res.json(result);
});

router.use('/emojis', emojis);
// router.use('/test', test)

export default router;
