pragma solidity ^0.4.17;

contract Campaign {

    // This is just a definition you then have to declare/instantiate different variables of this type (struct)
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals; // Okay this is to keep track of approvers who already have voted yes on a particular request.bit confusing for now | It could be like request specific approvals. How is it different from approvers?
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    //address[] public approvers;   // More cost efficient (in terms of gas) is to use mappings instead
    // mappings(key type => value type) // In mappings lookup is constant as compared to linear time lookup in arrays and all values exist as the default of the type of values. For example bool will default to false
    // Following we will map addresses to boolean to see which addresses have contributed

    mapping(address => bool) public approvers;
    uint approversCount; // keep track of number of all the contributors

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
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        // storage: Holds data b/w function call ~ hard drive ~ this data persists -- data stored in variables after their declaration
        // while assigning a storage variable to another storage variable, they both point to the same thing!
        // memory: temporary place to store data ~ RAM -- arguments to functions are usually memory data. Otherway around in this case as compared to the above. Default argument passing to functions is of memory type
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false, // We need to set it true later on; by default request is declared by setting complete as false
            approvalCount: 0
            // mapping is a reference type and we do not need to initialise it here
        });
        // A simple but less desirable method can be Request(desirable, value, recipient, false) for instance initialisation

        requests.push(newRequest);
    }

    // Following index is the index of the request that an approver want to vote *yes* on
    function approveRequest(uint index) public {
        // We will use a storage variable below since we want to manipulate the data a request at a given index
        Request storage request = requests[index];

        // First we check if the address is among the approvers/donators
        require(approvers[msg.sender]);

        // Then we check it hasn't already voted on the request under consideration
        require(!request.approvals[msg.sender]);

        // We add the current approver address to list of yes votes
        request.approvals[msg.sender] = true;

        // We count one more vote towards the approvalCount
        request.approvalCount++;
    }

    // The index in the following referes to the index of a request
    function finaliseRequest(uint index) public restricted {
        // Again we need to following to be a storage variable because we want to manipulate the data of request at index under consideration
        Request storage request = requests[index];

        // Need to check if the request has at least 51% votes
        require(request.approvalCount > (approversCount/2));

        // Need to see if this request hasn't already been finalised
        require(!request.complete);

        // We transfer the funds to the recipient. Maybe need to check if the value has been reached or not
        request.recipient.transfer(request.value);

        // Then we mark the request as complete
        request.complete = true;
    }
}
