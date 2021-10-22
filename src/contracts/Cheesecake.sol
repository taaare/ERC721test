// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Cheesecake is ERC721 {
	uint public totalSupply;
	string[] public flavors;
	mapping(string => bool) _flavorExists;

	/* init */
	constructor() ERC721("Cheesecake", "CHEESE") {
	}
										//identify minter roll here 
	function mint(string memory _flavor) public {
		// Require unique flavor
		// flavor - add new flavors
		// call the function
		// flavor - track flavors

		flavors.push(_flavor);
		uint _id = flavors.length - 1;
		_mint(msg.sender, _id);
		_flavorExists[_flavor] = true;
		totalSupply = _id;
	}


}
