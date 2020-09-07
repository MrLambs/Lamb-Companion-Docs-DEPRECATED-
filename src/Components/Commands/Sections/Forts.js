import React from 'react';

const Forts = () => {
  return (
    <div>
      <h3>Forts </h3>
      <h5><i className="material-icons prefix">arrow_forward</i> !Buy</h5>
      <p>
        Usage: !Buy [walls/gates/watchtowers] (Choose tier: 2-4)
                              -or-
        Usage: !Buy resources (number of pallets; 1 pallet = 100 resources)
      </p>
      <p>
        Each member using Lamb Companion has a fort. With !Buy, you can purchase upgrades and improve your odds of avoiding being plundered during a raid.
      </p>
      <h5><i className="material-icons prefix">arrow_forward</i> !Raid</h5>
      <p>
        Usage: !Raid [tag a member]
      </p>
      <p>
        Tag a user to raid their fort. Plunder both Resources and Lambies buy raiding other users.
      </p>
      <h5><i className="material-icons prefix">arrow_forward</i> !Shop</h5>
      <p>
        Usage: !Shop (optional: [walls/gates/watchtowers])
      </p>
      <p>
        View Lamb Companion's wares and upgrades. Fort upgrades are purchased with Lambies currency.
      </p>
      <h5><i className="material-icons prefix">arrow_forward</i> !Fort</h5>
      <p>
        Usage: !Shop (optional: tag a user)
      </p>
      <p>
        Take a gander at your magnificent fort or another user's fort before and after raiding them!
      </p>
    </div>
  );
}

export default Forts;