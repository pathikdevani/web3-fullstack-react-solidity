// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./MyNFT.sol";

contract MyNFTTokenFactory is Ownable {
    event NftCreated(address indexed tokenAddress);

    constructor() {
        // createNft("Violet", "VT", "#9400D3");
        // createNft("Indigo", "IG", "#4B0082");
        // createNft("Blue", "BL", "#0000FF");
        // createNft("Green", "GN", "#00FF00");
        // createNft("Yellow", "YL", "#FFFF00");
        // createNft("Orange", "ON", "#FF7F00");
        // createNft("Red", "RD", "#FF0000");
    }

    function createNft(string memory name, string memory symbol, string memory color) public onlyOwner {
        emit NftCreated(address(new MyNFT(name, symbol, color)));
    }

    function getNFTDetails(address nftAddress)
        public
        view
        returns (string memory name, string memory symbol, string memory color)
    {
        MyNFT token = MyNFT(nftAddress);
        return (token.name(), token.symbol(), token.color());
    }
}