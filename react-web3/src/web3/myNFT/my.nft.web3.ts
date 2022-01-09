import {Web3Handler} from '../web3.handler';
import ABI from './my.nft.abi';

const ADDRESS = "0x8Bf9Aa70dA104A4c9a2BE3991154cb7b639c765d";

const win = window as any;
class MyNFT3FactoryHandler extends Web3Handler { 

  async getNFTs() {
		const data = await this.contract.getPastEvents("NftCreated", { fromBlock: 1});
		const list = data.map((item:any) => {
			return this.contract.methods.getNFTDetails(item.returnValues.tokenAddress).call()
		});
		return Promise.all(list);
	}

  async addNFT(data: any): Promise<any> {
    return this.contract.methods.createNft(data.name, data.symbol, data.color).send({
      from: win.ethereum.selectedAddress,
    });
  }
}

export default new MyNFT3FactoryHandler(ABI, ADDRESS);;