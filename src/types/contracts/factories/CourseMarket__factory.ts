/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { CourseMarket, CourseMarketInterface } from "../CourseMarket";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_certificateAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "StringsInsufficientHexLength",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "web2CourseId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "CourseAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "student",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "certificateId",
        type: "uint256",
      },
    ],
    name: "CourseCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "web2CourseId",
        type: "string",
      },
    ],
    name: "CoursePurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "web2CourseId",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "addCourse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "students",
        type: "address[]",
      },
      {
        internalType: "string",
        name: "web2CourseId",
        type: "string",
      },
    ],
    name: "batchVerifyCourseCompletion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "certificate",
    outputs: [
      {
        internalType: "contract CourseCertificate",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "courseCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "courses",
    outputs: [
      {
        internalType: "string",
        name: "web2CourseId",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "string",
        name: "web2CourseId",
        type: "string",
      },
    ],
    name: "hasCourse",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "web2CourseId",
        type: "string",
      },
    ],
    name: "purchaseCourse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userCourses",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "student",
        type: "address",
      },
      {
        internalType: "string",
        name: "web2CourseId",
        type: "string",
      },
    ],
    name: "verifyCourseCompletion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "web2ToCourseId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yiDengToken",
    outputs: [
      {
        internalType: "contract YiDengToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051612b43380380612b43833981810160405281019061003291906102a3565b33600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a55760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161009c91906102f2565b60405180910390fd5b6100b48161013e60201b60201c565b5081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061030d565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061023282610207565b9050919050565b61024281610227565b811461024d57600080fd5b50565b60008151905061025f81610239565b92915050565b600061027082610207565b9050919050565b61028081610265565b811461028b57600080fd5b50565b60008151905061029d81610277565b92915050565b600080604083850312156102ba576102b9610202565b5b60006102c885828601610250565b92505060206102d98582860161028e565b9150509250929050565b6102ec81610265565b82525050565b600060208201905061030760008301846102e3565b92915050565b6128278061031c6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806393a05c201161008c578063b62644cd11610066578063b62644cd1461023d578063dd403ce114610259578063f24fa63a14610289578063f2fde38b146102a5576100ea565b806393a05c20146101a957806396f979d2146101d95780639b84006e1461020d576100ea565b806366055159116100c8578063660551591461014757806367589b6f14610165578063715018a6146101815780638da5cb5b1461018b576100ea565b80630262232b146100ef5780632dbf7b981461010d57806344a8ef191461012b575b600080fd5b6100f76102c1565b60405161010491906116b9565b60405180910390f35b6101156102e7565b6040516101229190611707565b60405180910390f35b610145600480360381019061014091906118b2565b61030d565b005b61014f61052d565b60405161015c919061194c565b60405180910390f35b61017f600480360381019061017a9190611967565b610533565b005b6101896109e2565b005b6101936109f6565b6040516101a091906119d1565b60405180910390f35b6101c360048036038101906101be9190611a18565b610a1f565b6040516101d09190611a73565b60405180910390f35b6101f360048036038101906101ee9190611a8e565b610a4e565b604051610204959493929190611b3a565b60405180910390f35b61022760048036038101906102229190611967565b610bc1565b604051610234919061194c565b60405180910390f35b61025760048036038101906102529190611c63565b610bef565b005b610273600480360381019061026e9190611cdb565b610df9565b6040516102809190611a73565b60405180910390f35b6102a3600480360381019061029e9190611cdb565b610ec7565b005b6102bf60048036038101906102ba9190611d37565b6111ba565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610315611240565b6000835111610359576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035090611db0565b60405180910390fd5b600060048460405161036b9190611e0c565b908152602001604051809103902054146103ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b190611e6f565b60405180910390fd5b600660008154809291906103cd90611ebe565b91905055506040518060a001604052808481526020018381526020018281526020016001151581526020013373ffffffffffffffffffffffffffffffffffffffff16815250600360006006548152602001908152602001600020600082015181600001908161043c9190612108565b5060208201518160010190816104529190612108565b506040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555060808201518160030160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506006546004846040516104da9190611e0c565b9081526020016040518091039020819055506006547f60dc19c8b14fd3a7f20dd113bdacc08bd8cdbfc6d28dcf1169272fc32eaef6c384846040516105209291906121da565b60405180910390a2505050565b60065481565b60006004826040516105459190611e0c565b908152602001604051809103902054905060008111610599576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105909061225d565b60405180910390fd5b6000600360008381526020019081526020016000206040518060a00160405290816000820180546105c990611f35565b80601f01602080910402602001604051908101604052809291908181526020018280546105f590611f35565b80156106425780601f1061061757610100808354040283529160200191610642565b820191906000526020600020905b81548152906001019060200180831161062557829003601f168201915b5050505050815260200160018201805461065b90611f35565b80601f016020809104026020016040519081016040528092919081815260200182805461068790611f35565b80156106d45780601f106106a9576101008083540402835291602001916106d4565b820191906000526020600020905b8154815290600101906020018083116106b757829003601f168201915b50505050508152602001600282015481526020016003820160009054906101000a900460ff161515151581526020016003820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050806060015161079e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610795906122c9565b60405180910390fd5b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff161561083c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083390612335565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33836080015184604001516040518463ffffffff1660e01b81526004016108a393929190612355565b6020604051808303816000875af11580156108c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e691906123b8565b610925576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091c90612431565b60405180910390fd5b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060006101000a81548160ff021916908315150217905550813373ffffffffffffffffffffffffffffffffffffffff167f1a04f8d389f43beccf2cc32092c53cb34d57ec70fd68693db2bfe79336db783c856040516109d59190612451565b60405180910390a3505050565b6109ea611240565b6109f460006112c7565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60056020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b6003602052806000526040600020600091509050806000018054610a7190611f35565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9d90611f35565b8015610aea5780601f10610abf57610100808354040283529160200191610aea565b820191906000526020600020905b815481529060010190602001808311610acd57829003601f168201915b505050505090806001018054610aff90611f35565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2b90611f35565b8015610b785780601f10610b4d57610100808354040283529160200191610b78565b820191906000526020600020905b815481529060010190602001808311610b5b57829003601f168201915b5050505050908060020154908060030160009054906101000a900460ff16908060030160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b6004818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b610bf7611240565b60005b8251811015610df45760056000848381518110610c1a57610c19612473565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600484604051610c6e9190611e0c565b908152602001604051809103902054815260200190815260200160002060009054906101000a900460ff168015610d5a5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633c433ebe848381518110610cf157610cf0612473565b5b6020026020010151846040518363ffffffff1660e01b8152600401610d179291906124a2565b602060405180830381865afa158015610d34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5891906123b8565b155b15610de7573073ffffffffffffffffffffffffffffffffffffffff1663f24fa63a848381518110610d8e57610d8d612473565b5b6020026020010151846040518363ffffffff1660e01b8152600401610db49291906124a2565b600060405180830381600087803b158015610dce57600080fd5b505af1158015610de2573d6000803e3d6000fd5b505050505b8080600101915050610bfa565b505050565b600080600483604051610e0c9190611e0c565b908152602001604051809103902054905060008111610e60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e579061225d565b60405180910390fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060009054906101000a900460ff1691505092915050565b610ecf611240565b6000600482604051610ee19190611e0c565b908152602001604051809103902054905060008111610f35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2c9061225d565b60405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060009054906101000a900460ff16610fd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc99061251e565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633c433ebe84846040518363ffffffff1660e01b815260040161102f9291906124a2565b602060405180830381865afa15801561104c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107091906123b8565b156110b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a79061258a565b60405180910390fd5b60006110bc848461138b565b90506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636b55243d8686856040518463ffffffff1660e01b815260040161111f939291906125aa565b6020604051808303816000875af115801561113e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111629190612604565b9050828573ffffffffffffffffffffffffffffffffffffffff167f69598479254610bc37273ec300171cd231505beb1ee68d360cbd78c1bd818278836040516111ab919061194c565b60405180910390a35050505050565b6111c2611240565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036112345760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161122b91906119d1565b60405180910390fd5b61123d816112c7565b50565b6112486113bf565b73ffffffffffffffffffffffffffffffffffffffff166112666109f6565b73ffffffffffffffffffffffffffffffffffffffff16146112c5576112896113bf565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016112bc91906119d1565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b606081611397846113c7565b6040516020016113a89291906126ef565b604051602081830303815290604052905092915050565b600033905090565b60606113ed8273ffffffffffffffffffffffffffffffffffffffff16601460ff166113f4565b9050919050565b606060008390506000600284600261140c9190612729565b611416919061276b565b67ffffffffffffffff81111561142f5761142e611751565b5b6040519080825280601f01601f1916602001820160405280156114615781602001600182028036833780820191505090505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061149957611498612473565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106114fd576114fc612473565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600185600261153d9190612729565b611547919061276b565b90505b60018111156115e7577f3031323334353637383961626364656600000000000000000000000000000000600f84166010811061158957611588612473565b5b1a60f81b8282815181106115a05761159f612473565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600483901c9250806115e09061279f565b905061154a565b506000821461162f5784846040517fe22e27eb0000000000000000000000000000000000000000000000000000000081526004016116269291906127c8565b60405180910390fd5b809250505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061167f61167a6116758461163a565b61165a565b61163a565b9050919050565b600061169182611664565b9050919050565b60006116a382611686565b9050919050565b6116b381611698565b82525050565b60006020820190506116ce60008301846116aa565b92915050565b60006116df82611664565b9050919050565b60006116f1826116d4565b9050919050565b611701816116e6565b82525050565b600060208201905061171c60008301846116f8565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61178982611740565b810181811067ffffffffffffffff821117156117a8576117a7611751565b5b80604052505050565b60006117bb611722565b90506117c78282611780565b919050565b600067ffffffffffffffff8211156117e7576117e6611751565b5b6117f082611740565b9050602081019050919050565b82818337600083830152505050565b600061181f61181a846117cc565b6117b1565b90508281526020810184848401111561183b5761183a61173b565b5b6118468482856117fd565b509392505050565b600082601f83011261186357611862611736565b5b813561187384826020860161180c565b91505092915050565b6000819050919050565b61188f8161187c565b811461189a57600080fd5b50565b6000813590506118ac81611886565b92915050565b6000806000606084860312156118cb576118ca61172c565b5b600084013567ffffffffffffffff8111156118e9576118e8611731565b5b6118f58682870161184e565b935050602084013567ffffffffffffffff81111561191657611915611731565b5b6119228682870161184e565b92505060406119338682870161189d565b9150509250925092565b6119468161187c565b82525050565b6000602082019050611961600083018461193d565b92915050565b60006020828403121561197d5761197c61172c565b5b600082013567ffffffffffffffff81111561199b5761199a611731565b5b6119a78482850161184e565b91505092915050565b60006119bb8261163a565b9050919050565b6119cb816119b0565b82525050565b60006020820190506119e660008301846119c2565b92915050565b6119f5816119b0565b8114611a0057600080fd5b50565b600081359050611a12816119ec565b92915050565b60008060408385031215611a2f57611a2e61172c565b5b6000611a3d85828601611a03565b9250506020611a4e8582860161189d565b9150509250929050565b60008115159050919050565b611a6d81611a58565b82525050565b6000602082019050611a886000830184611a64565b92915050565b600060208284031215611aa457611aa361172c565b5b6000611ab28482850161189d565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611af5578082015181840152602081019050611ada565b60008484015250505050565b6000611b0c82611abb565b611b168185611ac6565b9350611b26818560208601611ad7565b611b2f81611740565b840191505092915050565b600060a0820190508181036000830152611b548188611b01565b90508181036020830152611b688187611b01565b9050611b77604083018661193d565b611b846060830185611a64565b611b9160808301846119c2565b9695505050505050565b600067ffffffffffffffff821115611bb657611bb5611751565b5b602082029050602081019050919050565b600080fd5b6000611bdf611bda84611b9b565b6117b1565b90508083825260208201905060208402830185811115611c0257611c01611bc7565b5b835b81811015611c2b5780611c178882611a03565b845260208401935050602081019050611c04565b5050509392505050565b600082601f830112611c4a57611c49611736565b5b8135611c5a848260208601611bcc565b91505092915050565b60008060408385031215611c7a57611c7961172c565b5b600083013567ffffffffffffffff811115611c9857611c97611731565b5b611ca485828601611c35565b925050602083013567ffffffffffffffff811115611cc557611cc4611731565b5b611cd18582860161184e565b9150509250929050565b60008060408385031215611cf257611cf161172c565b5b6000611d0085828601611a03565b925050602083013567ffffffffffffffff811115611d2157611d20611731565b5b611d2d8582860161184e565b9150509250929050565b600060208284031215611d4d57611d4c61172c565b5b6000611d5b84828501611a03565b91505092915050565b7f5765623220636f757273652049442063616e6e6f7420626520656d7074790000600082015250565b6000611d9a601e83611ac6565b9150611da582611d64565b602082019050919050565b60006020820190508181036000830152611dc981611d8d565b9050919050565b600081905092915050565b6000611de682611abb565b611df08185611dd0565b9350611e00818560208601611ad7565b80840191505092915050565b6000611e188284611ddb565b915081905092915050565b7f436f7572736520616c7265616479206578697374730000000000000000000000600082015250565b6000611e59601583611ac6565b9150611e6482611e23565b602082019050919050565b60006020820190508181036000830152611e8881611e4c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611ec98261187c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611efb57611efa611e8f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611f4d57607f821691505b602082108103611f6057611f5f611f06565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611fc87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611f8b565b611fd28683611f8b565b95508019841693508086168417925050509392505050565b6000612005612000611ffb8461187c565b61165a565b61187c565b9050919050565b6000819050919050565b61201f83611fea565b61203361202b8261200c565b848454611f98565b825550505050565b600090565b61204861203b565b612053818484612016565b505050565b5b818110156120775761206c600082612040565b600181019050612059565b5050565b601f8211156120bc5761208d81611f66565b61209684611f7b565b810160208510156120a5578190505b6120b96120b185611f7b565b830182612058565b50505b505050565b600082821c905092915050565b60006120df600019846008026120c1565b1980831691505092915050565b60006120f883836120ce565b9150826002028217905092915050565b61211182611abb565b67ffffffffffffffff81111561212a57612129611751565b5b6121348254611f35565b61213f82828561207b565b600060209050601f8311600181146121725760008415612160578287015190505b61216a85826120ec565b8655506121d2565b601f19841661218086611f66565b60005b828110156121a857848901518255600182019150602085019450602081019050612183565b868310156121c557848901516121c1601f8916826120ce565b8355505b6001600288020188555050505b505050505050565b600060408201905081810360008301526121f48185611b01565b905081810360208301526122088184611b01565b90509392505050565b7f436f7572736520646f6573206e6f742065786973740000000000000000000000600082015250565b6000612247601583611ac6565b915061225282612211565b602082019050919050565b600060208201905081810360008301526122768161223a565b9050919050565b7f436f75727365206e6f7420616374697665000000000000000000000000000000600082015250565b60006122b3601183611ac6565b91506122be8261227d565b602082019050919050565b600060208201905081810360008301526122e2816122a6565b9050919050565b7f416c726561647920707572636861736564000000000000000000000000000000600082015250565b600061231f601183611ac6565b915061232a826122e9565b602082019050919050565b6000602082019050818103600083015261234e81612312565b9050919050565b600060608201905061236a60008301866119c2565b61237760208301856119c2565b612384604083018461193d565b949350505050565b61239581611a58565b81146123a057600080fd5b50565b6000815190506123b28161238c565b92915050565b6000602082840312156123ce576123cd61172c565b5b60006123dc848285016123a3565b91505092915050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b600061241b600f83611ac6565b9150612426826123e5565b602082019050919050565b6000602082019050818103600083015261244a8161240e565b9050919050565b6000602082019050818103600083015261246b8184611b01565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006040820190506124b760008301856119c2565b81810360208301526124c98184611b01565b90509392505050565b7f436f75727365206e6f7420707572636861736564000000000000000000000000600082015250565b6000612508601483611ac6565b9150612513826124d2565b602082019050919050565b60006020820190508181036000830152612537816124fb565b9050919050565b7f436572746966696361746520616c726561647920697373756564000000000000600082015250565b6000612574601a83611ac6565b915061257f8261253e565b602082019050919050565b600060208201905081810360008301526125a381612567565b9050919050565b60006060820190506125bf60008301866119c2565b81810360208301526125d18185611b01565b905081810360408301526125e58184611b01565b9050949350505050565b6000815190506125fe81611886565b92915050565b60006020828403121561261a5761261961172c565b5b6000612628848285016125ef565b91505092915050565b7f68747470733a2f2f6170692e796964656e672e636f6d2f63657274696669636160008201527f74652f0000000000000000000000000000000000000000000000000000000000602082015250565b600061268d602383611dd0565b915061269882612631565b602382019050919050565b7f2f00000000000000000000000000000000000000000000000000000000000000600082015250565b60006126d9600183611dd0565b91506126e4826126a3565b600182019050919050565b60006126fa82612680565b91506127068285611ddb565b9150612711826126cc565b915061271d8284611ddb565b91508190509392505050565b60006127348261187c565b915061273f8361187c565b925082820261274d8161187c565b9150828204841483151761276457612763611e8f565b5b5092915050565b60006127768261187c565b91506127818361187c565b925082820190508082111561279957612798611e8f565b5b92915050565b60006127aa8261187c565b9150600082036127bd576127bc611e8f565b5b600182039050919050565b60006040820190506127dd600083018561193d565b6127ea602083018461193d565b939250505056fea26469706673582212202e3613ced2099dc3d269a9f322e174670b5667f6f381e38fdedcb23e8c0c3d5664736f6c634300081c0033";

type CourseMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CourseMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CourseMarket__factory extends ContractFactory {
  constructor(...args: CourseMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _tokenAddress: AddressLike,
    _certificateAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _tokenAddress,
      _certificateAddress,
      overrides || {}
    );
  }
  override deploy(
    _tokenAddress: AddressLike,
    _certificateAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _tokenAddress,
      _certificateAddress,
      overrides || {}
    ) as Promise<
      CourseMarket & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CourseMarket__factory {
    return super.connect(runner) as CourseMarket__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CourseMarketInterface {
    return new Interface(_abi) as CourseMarketInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CourseMarket {
    return new Contract(address, _abi, runner) as unknown as CourseMarket;
  }
}
