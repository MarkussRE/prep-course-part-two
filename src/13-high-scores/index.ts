/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    const scoreCopy:number[]= [...this.scores] // vajag kopijas izveidotpirms veicts izmainas By creating a copy of this.scores using the spread operator ([...this.scores]), you ensure that the original array remains unaltered when you retrieve the latest, personal best, and personal top three scores.
    return scoreCopy.pop();
  }

  get personalBest() {
    let biggestNum:number = 0
    for(let i = 0; i < this.scores.length; i++){
    if(this.scores[i] > biggestNum){
      biggestNum = this.scores[i]
      }
    }
    return biggestNum
  }

  get personalTopThree() {
    const scoreCopy:number[]= [...this.scores] // vajag kopijas izveidotpirms veicts izmainas By creating a copy of this.scores using the spread operator ([...this.scores]), you ensure that the original array remains unaltered when you retrieve the latest, personal best, and personal top three scores.
    const sortedArray = scoreCopy.sort((a, b) => b - a); 
    
    const top3Numbers = sortedArray.slice(0, 3);

    return top3Numbers;
  }
}

export { HighScores };
