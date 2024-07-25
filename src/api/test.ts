import express, { Request, Response } from 'express';
import { getAllScores } from '../db/leaderboard-fns';

// import { getAllScores } from './db/leaderboard-fns'

const leaderboard = express.Router();

leaderboard.get('/', async (req: Request, res: Response) => {
  try {
    const result = getAllScores();
    // const scores = result.sort((a, b) => Number(a.time) - Number(b.time));

    // const newScores = scores.map((score) => {
    //   const time = Number(score.time);
    //   const newMin = Math.floor(time / 60);
    //   const newSec = time % 60;
    //   const newTime = `${newMin}min ${newSec}sec`;
    //   return { ...score, time: newTime };
    // });

    res.json(result);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ error: 'Error fetching leaderboard' });
  }
});

export default leaderboard;
