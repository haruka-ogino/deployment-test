// import { turso } from './connection';

export function getAllScores() {
  // const scores = await turso.execute('SELECT * FROM leaderboard');
  // console.log(scores.rows);

  // return scores.rows;
  return [0, 1, 2, 3];
}

// export async function addScores(score: ScoreDraft) {
//   const query = `
//     INSERT INTO leaderboard (name, time)
//     VALUES (?, ?);`

//   const args = [score.name, score.time]

//   try {
//     const result = await turso.execute({ sql: query, args })
//     return result
//   } catch (error) {
//     console.error('Error executing query')
//     throw error
//   }
// }
