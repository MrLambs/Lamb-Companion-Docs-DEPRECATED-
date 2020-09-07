import React from 'react';

const Casino = () => {
  return (
    <div>
      <h3>Casino </h3>
      <h5><i className="material-icons prefix">arrow_forward</i> !Balance</h5>
      <p>
        Usage: !Balance
      </p>
      <p>
        View your current account Lambies balance!
      </p>
      <h5><i className="material-icons prefix">arrow_forward</i> !Flip</h5>
      <p>
        Usage: !Flip [heads/tails] (bet)
      </p>
      <p>
        A coin flip gamble where returns are 1 to 1.
      </p>
      <h5><i className="material-icons prefix">arrow_forward</i> !Leaderboard</h5>
      <p>
        Usage: !Leaderboard
      </p>
      <p>
        Check the current Lambies leaderboard.
      </p>
      <h5><i className="material-icons prefix">arrow_forward</i> !Pay</h5>
      <p>
        Usage: !Pay [tag a member] (amount)
      </p>
      <p>
        Pay another guild member Lambies by tagging them. 
      </p>
      <h5><i className="material-icons prefix">arrow_forward</i> !Roulette</h5>
      <p>
        Usage: !Roulette [red/black] (bet)
      </p>
      <p>
        A roulette gambling game, where Lamb Companion will print a random number of alternating black and red squares. The last color printed is the winner. Returns are 1 to 1.5.
      </p>
      <h5><i className="material-icons prefix">arrow_forward</i> !Rps</h5>
      <p>
        Usage: !Rps (bet)
      </p>
      <p>
        Rock, paper, scissors against Lamb Companion.
      </p>
    </div >
    );
}

export default Casino;