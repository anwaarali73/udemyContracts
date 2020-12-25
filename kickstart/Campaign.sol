pragma solidity ^0.4.17;

contract Campaign {

    // This is just a definition you then have to declare/instantiate different variables of this type (struct)
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    //address[] public approvers;   // More cost efficient (in terms of gas) is to use mappings instead
    // mappings(key type => value type) // In mappings lookup is constant as compared to linear time lookup in arrays and all values exist as the default of the type of values. For example bool will default to false
    // Following we will map addresses to boolean to see which addresses have contributed

    mapping(address => bool) public approvers;

    // Following is a function modifier used to implement some restrictions of checks specified in its body to other functions
    modifier restricted() {
        require(msg.sender == manager); // Would be used for control purposes and for sensitive decision-making function calls ~ your overarching decision making idea
        _;
    }

    function Campaign(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        //approvers.push(msg.sender);

        // In the following way we handle mappings. We index using key and we then set the value
        approvers[msg.sender] = true; // It means msg.sender is true or is a contributor and hence an approver
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        // storage: Holds data b/w function call ~ hard drive ~ this data persists -- data stored in variables after their declaration
        // while assigning a storage variable to another storage variable, they both point to the same thing!
        // memory: temporary place to store data ~ RAM -- arguments to functions are usually memory data. Otherway around in this case as compared to the above. Default argument passing to functions is of memory type
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false // We need to set it true later on; by default request is declared by setting complete as false
        });
        // A simple but less desirable method can be Request(desirable, value, recipient, false) for instance initialisation

        requests.push(newRequest);
    }
}
