// need main function for turn by turn
export function rps(play){
    let turns = ['rock', 'paper', 'scissors'];
    if(play == undefined){
        // random if play empty
        return {"player": turns[Math.floor(Math.random() * turns.length)]}
    } else{
        play = play.toLowerCase();
        // input not valid
        if(!turns.includes(play)){
            return 'out-of-range-error';
        } else{
            // comp is the opponent
            let comp = turns[Math.floor(Math.random() * turns.length)];
            // poss outcomes
            // tie if none of these happen
            let outcome = 'tie';

            // paper beats rock, rock beats scissor
            if(play == 'rock'){
                if(comp == 'paper'){
                    outcome = 'lose';
                } else if(comp == 'scissors'){
                    outcome = 'win';
                }
            }
            // scissor beats paper, paper beats rock
            else if(play == 'paper'){
                if(comp == 'scissors'){
                    outcome = 'lose';
                } else if(comp == 'rock'){
                    outcome = 'win';
                }
            }
            // rock beats scissor, scissor beats paper
            else if(play == 'scissors'){
                if(comp == 'rock'){
                    outcome = 'lose';
                } else if(comp == 'paper'){
                    outcome = 'win';
                }
            }
            // return player's
            return{"player": play, 'opponent': comp, 'result': outcome};
        }
    }
}

