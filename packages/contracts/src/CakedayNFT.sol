// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import {ERC721Base} from "./ERC721Base.sol";

/// @author rssi.eth
/// @title  Cakeday
contract CakedayNFT is ERC721Base {
    // ****************** //
    // *** INITIALIZE *** //
    // ****************** //

    constructor() ERC721Base("Cakeday NFT", "CAKEDAY", 0.1 ether, 10_000) {}

    // ************ //
    // *** MINT *** //
    // ************ //

    function mint(uint256 numToBeMinted)
        external
        payable
        hasExactPayment(numToBeMinted)
        withinMintLimit(4, numToBeMinted)
    {
        _mintMany(_msgSender(), numToBeMinted);
    }
}
