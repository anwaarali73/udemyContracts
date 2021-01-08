pragma solidity ^0.4.17;
import "github.com/provable-things/ethereum-api/provableAPI_0.4.25.sol";

// Following is an over-arching contract to manage the individual instances of Campaigns
contract CampaignFactory {
    address[] public deployedCampaigns;
    address public overAllOwner;

    function CampaignFactory() public {
        overAllOwner = msg.sender;
    }

    // Following argument is for the constructor of the Campaign contract below.
    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender, overAllOwner);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

// Following is to implement the update functionality using delegatecall for a particular campaign instance

contract UpdateCampaign {

    address public Owner;   // Overall owner of the system; capable of changing the ownership of campains and invoking delegate contracts
    address public oracle;
    string public oracleResult;
    bytes32 public provableID;
    // This is just a definition you then have to declare/instantiate different variables of this type (struct)
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;   // This is request specfic   // These are the actual yes votes by the approvers
        mapping(address => bool) approvals; // Okay this is to keep track of approvers who already have voted yes on a particular request.bit confusing for now | It could be like request specific approvals. How is it different from approvers?
    }

    Request[] public requests;   // We will make use of it in RequestIndex component for our web app. It is at /campaigns/requests/index.js
    address public manager;
    uint public minimumContribution;
    //address[] public approvers;   // More cost efficient (in terms of gas) is to use mappings instead
    // mappings(key type => value type) // In mappings lookup is constant as compared to linear time lookup in arrays and all values exist as the default of the type of values. For example bool will default to false
    // Following we will map addresses to boolean to see which addresses have contributed
    uint256 public total;
    mapping(address => bool) public approvers;
    uint public approversCount; // keep track of number of all the contributors  // This is campaign specific


    function UpdateCampaign() public {}

    function changeManager(address new_manager) public {
        manager = new_manager;
    }

    function add(uint256 x, uint256 y) public {
        total = x + y;
    }
}

contract Campaign is usingProvable {

    address public Owner;   // Overall owner of the system; capable of changing the ownership of campains and invoking delegate contracts
    address public oracle;
    string public oracleResult;
    bytes32 public provableID;
    // This is just a definition you then have to declare/instantiate different variables of this type (struct)
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;   // This is request specfic   // These are the actual yes votes by the approvers
        mapping(address => bool) approvals; // Okay this is to keep track of approvers who already have voted yes on a particular request.bit confusing for now | It could be like request specific approvals. How is it different from approvers?
    }

    Request[] public requests;   // We will make use of it in RequestIndex component for our web app. It is at /campaigns/requests/index.js
    address public manager;
    uint public minimumContribution;
    //address[] public approvers;   // More cost efficient (in terms of gas) is to use mappings instead
    // mappings(key type => value type) // In mappings lookup is constant as compared to linear time lookup in arrays and all values exist as the default of the type of values. For example bool will default to false
    // Following we will map addresses to boolean to see which addresses have contributed
    uint256 public total;
    mapping(address => bool) public approvers;
    uint public approversCount; // keep track of number of all the contributors  // This is campaign specific

    // Following is a function modifier used to implement some restrictions of checks specified in its body to other functions
    modifier restricted() {
        require(msg.sender == manager); // Would be used for control purposes and for sensitive decision-making function calls ~ your overarching decision making idea
        _;
    }

    // Following is a function modifier used to restrict the deleate calls to the overall owner of the system
    modifier forOwner() {
        require(msg.sender == Owner); // Would be used for control purposes and for sensitive decision-making function calls ~ your overarching decision making idea
        _;
    }

    function Campaign(uint minimum, address creator, address _overAllOwner) public {
        OAR = OracleAddrResolverI(0x93F40138E4b1515a81d76217fa0aab02D68B1c36);   // From ethereum bridge instance
        manager = creator;   // Creator is the address of the node who invokes the createCampaign function in the above contract
        minimumContribution = minimum;
        Owner = _overAllOwner;
    }

    function getOutsideMeasurement() public payable {
        provableID = provable_query("WolframAlpha", "square root of 1225");
    }

    function __callback(bytes32 _provableID, string _result) public {
        if(msg.sender != provable_cbAddress()) revert();
        oracleResult = _result;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        //approvers.push(msg.sender);

        // In the following way we handle mappings. We index using key and we then set the value
        approvers[msg.sender] = true; // It means msg.sender is true or is a contributor and hence an approver
        approversCount++;
    }

    function createRequest(string memory description, uint value, address recipient) public restricted {
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

    // This functiona is basically to ease the process of showing the relevant
    // content to the user in the show.js file of our web application
    function getSummary() public view returns (uint, uint, uint, uint, address) {
      return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }

  function getRequestsCount() public view returns (uint) {
    return requests.length;
  }

    function changeOwnership(address updateContract, address newOwner) public forOwner {
        require(updateContract.delegatecall(bytes4(keccak256("changeManager(address)")), newOwner));
    }

    function addInB(address updateContract, uint256 a, uint256 b) public {
        require(updateContract.call(bytes4(keccak256("add(uint256,uint256)")), a, b));
    }

    function callOracle(address _oracle) public returns (string) {
        require(_oracle.delegatecall(bytes4(keccak256("result()"))));
    }
}
