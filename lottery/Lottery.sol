pragma solidity ^0.4.17;

// This contract could be converted into some kind
// kind of an escrow contract among the peers of my
// community network for short-term service contracts and payments.
// I think, particularly the pickWinner function will have a link to the
// micropayments concept. Might need to adopt a clever technique such hashed-time locks
// to release the funds of a contract to the relevant peer after the expiration of the relevant
// time period.

contract Lottery {
  address public manager;
  address[] public players;

  function Lottery() public {
    manager = msg.sender;
  }

  function enter() public payable {
    require(msg.value >= 0.01 ether);
    players.push(msg.sender);
  }

  // Follwoing is going to be a helper function for random number generation
  // unit() converts its input into an integer

  function random() private view returns (uint) {
    return uint(keccak256(block.difficulty, now, players));
  }

  // this. is a reference to the current deployed instance of the contract
  function pickWinner() public {
    uint index = random() % player.length();
    // This means transfer all the funds held by the contract at the instance to
    // the address (returned by palyers[index]) of the winner player.
    players[index].transfer(this.balance);
  }
}
