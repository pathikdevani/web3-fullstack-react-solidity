import {Web3Handler} from '../web3.handler';
import ABI from './my.nft.abi';

const ADDRESS = "0x561F7E7d9f793b93069203Ad8d182392A86B3c4f";

class MyNFT3FactoryHandler extends Web3Handler { 

}

export default new MyNFT3FactoryHandler(ABI, ADDRESS);;