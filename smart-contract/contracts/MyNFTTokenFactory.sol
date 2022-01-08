// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

import "./MyNFT.sol";
import "./MyNFTToken.sol";

contract MyNFTTokenFactory is Ownable {
    event TokenCreated(address indexed tokenAddress);
    event NftCreated(address indexed tokenAddress);

    constructor() {
        createToken("My Token", "KD");
        createNft("My Nft", "NT");
    }

    function createToken(string memory name, string memory symbol) public onlyOwner {
        emit TokenCreated(address(new MyNFTToken(name, symbol)));
    }

    function mint(address tokenAddress, uint256 amount) public onlyOwner {
        MyNFTToken(tokenAddress).mint(address(this), amount);
    }

    function createNft(string memory name, string memory symbol) public onlyOwner {
        emit NftCreated(address(new MyNFT(name, symbol)));
    }

    function getTokenDetails(address tokenAddress)
        public
        view
        returns (string memory name, string memory symbole)
    {
        MyNFTToken token = MyNFTToken(tokenAddress);
        return (token.name(), token.symbol());
    }

    function transfer(
        address tokenAddress,
        address recipient,
        uint256 amount
    ) public onlyOwner {
        MyNFTToken(tokenAddress).transfer(recipient, amount);
    }
}