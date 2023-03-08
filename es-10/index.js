
const players = ["Tina", "Jorge", "Julien"]

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

 const getResults = async (play )=>{
    try {
        const result = await luckyDraw(play)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
 }

 players.forEach(person => getResults(person))