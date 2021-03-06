// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// NOTE: https://docs.openzeppelin.com/contracts/4.x/
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    string _color;

    constructor(string memory name, string memory symbol, string memory color)
        public
        ERC721(name, symbol)
    {
        _color = color;
    }

    function color() public view returns (string memory) {
        return _color;
    }
}
