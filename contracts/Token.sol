pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/access/roles/MinterRole.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract Token is Ownable, MinterRole, ERC721Full {
  using SafeMath for uint;

  // 创建一个专属会员 NFT Token
  constructor() ERC721Full("VIP Token", "VIPT") public {
  }

  // mint 函数 创建 新NFT 及其URI， 给指定的地址
  function mint(address _to, string memory _tokenURI) public onlyMinter returns (bool) {
    _mintWithTokenURI(_to, _tokenURI);
    return true;
  }

  // 通过车 URI 生成专属 NFT
  function _mintWithTokenURI(address _to, string memory _tokenURI) internal {
    uint _tokenId = totalSupply().add(1);    // ID递增
    _mint(_to, _tokenId);
    _setTokenURI(_tokenId, _tokenURI);
  }
}