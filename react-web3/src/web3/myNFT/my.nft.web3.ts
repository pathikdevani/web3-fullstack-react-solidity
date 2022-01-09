import {Web3Handler} from '../web3.handler';
import ABI from './my.nft.abi';

const ADDRESS = "0xAe54230FeA4a1c845b91fcec3B99D00Ea861C304";

class MyNFT3FactoryHandler extends Web3Handler { 

  async getNFTs() {
		const data = await this.contract.getPastEvents("NftCreated");
		const list = data.map((item:any) => {
			return this.contract.methods.getNFTDetails(item.returnValues.tokenAddress).call()
		});
		return Promise.all(list);
	}
}

export default new MyNFT3FactoryHandler(ABI, ADDRESS);;