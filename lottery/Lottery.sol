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
    address public winner;

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
        // now is the reference to current time
        return uint(keccak256(block.difficulty, now, players));
    }

    function pickWinner() public restricted {
        // require(msg.sender ==  manager); // This will be moved to the function modifier below
        uint index = random()  % players.length;
        winner = players[index];
        winner.transfer(this.balance);
        // Below (0) indicate that the dynamic array will be initialised with size 0.
        players = new address[](0);
    }

    // Below, in order to avoid repition, a function modifier is used. restricted is not a keyword and this modifier
    // can be applied to any number of functions and it will be applied to the target function's context

    modifier restricted() {
        require(msg.sender ==  manager);
        _; // _ will be replaced by the body of code of the function where this modifier (restricted) is applied
    }

    function getPlayers() public view returns(address[]) {
        return players;
    }
}
