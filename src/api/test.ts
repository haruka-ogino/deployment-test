import express, { Request, Response } from 'express';

// import { getAllScores } from './db/leaderboard-fns'

const test = express.Router();

test.get('/', async (req: Request, res: Response) => {
  try {
    // const result = await getAllScores()
    // const scores = result.rows.sort((a, b) => Number(a.time) - Number(b.time))

    // const newScores = scores.map((score) => {
    //   const time = Number(score.time)
    //   const newMin = Math.floor(time / 60)
    //   const newSec = time % 60
    //   const newTime = `${newMin}min ${newSec}sec`
    //   return { ...score, time: newTime }
    // })

    // res.json(newScores)
    res.json('This is a test');
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ error: 'Error fetching leaderboard' });
  }
});

export default test;
