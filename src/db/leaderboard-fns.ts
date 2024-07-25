import { turso } from './connection';

export async function getAllScores() {
  const scores = await turso.execute('SELECT * FROM leaderboard');
  console.log(scores.rows);

  return scores.rows;
}

interface ScoreDraft {
  name: string
  time: string
}

export async function addScores(score: ScoreDraft) {
  const query = `
    INSERT INTO leaderboard (name, time)
    VALUES (?, ?);`;

  const args = [score.name, score.time];

  try {
    const result = await turso.execute({ sql: query, args });
    return result;
  } catch (error) {
    console.error('Error executing query');
    throw error;
  }
}
